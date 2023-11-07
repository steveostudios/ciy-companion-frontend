import { api, programSlug } from "./data";
import { AppPage } from "./types";
// import { Event, RootPage, Route, RouteType } from "./types";

export const getEvent = async (eventSlug: string, skipFetch?: boolean) => {
  const localEvent = localStorage.getItem("event");
  const localEventCacheTime = localStorage.getItem("eventCacheTime");
  const eventCacheTime = 1000 * 60 * 60; // 1 hour
  // const eventCacheTime = 1000 * 10; // 10 seconds

  if (localEvent === "undefined" || !localEvent) {
    if (eventSlug) {
      const result = await fetchEvent(eventSlug);
      return result;
    }
    return null;
  } else {
    if (
      (localEventCacheTime &&
        Date.now() - parseInt(localEventCacheTime) > eventCacheTime &&
        JSON.parse(localEvent).slug &&
        !skipFetch) ||
      !localEventCacheTime
    ) {
      (async () => {
        await fetchEvent(JSON.parse(localEvent).slug);
      })();
    }
    return JSON.parse(localEvent);
  }
};

const eventUrlParams: string = [
  "id",
  "slug",
  "type",
  "acf",
  "status",
  "title.rendered",
  "program",
  "acf.start_date",
  "acf.end_date",
].join(",");

export const fetchEvent = async (slug: string) => {
  console.log("FETCHING EVENT");
  const url = `${
    api[process.env.REACT_APP_ENV || "dev"]
  }/wp-json/wp/v2/events?slug=${slug}&acf_format=standard&_fields=${eventUrlParams}`;
  const response = await fetch(url);
  const data = await response.json();
  if (data[0]) {
    const result = cleanData(data[0]);
    // localStorage.setItem("event", JSON.stringify(data[0]));
    // localStorage.setItem("eventCacheTime", Date.now().toString());
    // return data[0];
    localStorage.setItem("event", JSON.stringify(result));
    return result;
  }
};

export const clearEvent = () => {
  localStorage.removeItem("event");
  localStorage.removeItem("eventCacheTime");
};

const getPageData = (page: any, path: string) => {
  switch (page.meta.type) {
    case "app":
      return {
        slug: page.slug,
        type: page.meta.type,
        path: `${path}/${page.slug}`,
        data: {
          title: page[page.meta.type].title,
          name: page[page.meta.type].name,
          appleStoreUrl: page[page.meta.type].apple_store_url,
          googlePlayStoreUrl: page[page.meta.type].google_play_store_url,
          icon: page[page.meta.type].icon,
          description: page[page.meta.type].description,
        },
      };
    case "contacts":
      return {
        slug: page.slug,
        type: page.meta.type,
        path: `${path}/${page.slug}`,
        data: {
          title: page[page.meta.type].label,
          description: page[page.meta.type].description,
          contacts: page[page.meta.type].contacts.map((contact: any) => ({
            ...contact,
            image: contact.image.sizes.thumbnail,
          })),
        },
      };
    case "connect":
      return {
        slug: page.slug,
        type: page.meta.type,
        path: `${path}/${page.slug}`,
        data: {
          title: page[page.meta.type].title,
          connections: page[page.meta.type].connections,
        },
      };
    case "embedded":
      return {
        slug: page.slug,
        type: page.meta.type,
        path: `${path}/${page.slug}`,
        data: {
          title: page[page.meta.type].title,
          url: page[page.meta.type].url,
        },
      };
    case "grid":
      return {
        slug: page.slug,
        type: page.meta.type,
        path: `${path}/${page.slug}`,
        data: {
          title: page[page.meta.type].label,
          description: page[page.meta.type].description,
          images: page[page.meta.type].images.map((image: any) => ({
            ...image,
            image: image.image.sizes.thumbnail,
          })),
        },
      };
    case "image":
      return {
        slug: page.slug,
        type: page.meta.type,
        path: `${path}/${page.slug}`,
        data: {
          title: page[page.meta.type].title,
          image: page[page.meta.type].image,
        },
      };
    case "menu":
      return {
        slug: page.slug,
        type: page.meta.type,
        path: `${path}/${page.slug}`,
        data: {
          title: page[page.meta.type].title,
          description: page[page.meta.type].description,
          buttons: page[page.meta.type].buttons,
        },
      };
    case "schedule":
      return {
        slug: page.slug,
        type: page.meta.type,
        path: `${path}/${page.slug}`,
        data: {
          title: page[page.meta.type].title,
          days: page[page.meta.type].days.map((day: any) => ({
            day: day.day.map((event: any) => ({
              ...event,
              icon: event.icon,
            })),
          })),
        },
      };
    case "video":
      return {
        slug: page.slug,
        type: page.meta.type,
        path: `${path}/${page.slug}`,
        data: {
          title: page[page.meta.type].title,
          video: page[page.meta.type].id,
        },
      };
  }
};

const getSubPageData = (page: any, path: string) => {
  switch (page.type) {
    case "app":
      return {
        slug: page.slug,
        type: page.type,
        path: `${path}/${page.slug}`,
        data: {
          title: page.content[page.type].title,
          name: page.content[page.type].name,
          appleStoreUrl: page.content[page.type].apple_store_url,
          googlePlayStoreUrl: page.content[page.type].google_play_store_url,
          icon: page.content[page.type].icon,
          description: page.content[page.type].description,
        },
      };
    case "contacts":
      return {
        slug: page.slug,
        type: page.type,
        path: `${path}/${page.slug}`,
        data: {
          title: page.content[page.type].label,
          description: page.content[page.type].description,
          contacts: page.content[page.type].contacts.map((contact: any) => ({
            ...contact,
            image: contact.image.sizes.thumbnail,
          })),
        },
      };
    case "connect":
      return {
        slug: page.slug,
        type: page.type,
        path: `${path}/${page.slug}`,
        data: {
          title: page.content[page.type].title,
          connections: page.content[page.type].connections,
        },
      };
    case "embedded":
      return {
        slug: page.slug,
        type: page.type,
        path: `${path}/${page.slug}`,
        data: {
          title: page.content[page.type].title,
          url: page.content[page.type].url,
        },
      };
    case "grid":
      return {
        slug: page.slug,
        type: page.type,
        path: `${path}/${page.slug}`,
        data: {
          title: page.content[page.type].label,
          description: page.content[page.type].description,
          images: page.content[page.type].images.map((image: any) => ({
            ...image,
            image: image.image.sizes.thumbnail,
          })),
        },
      };
    case "image":
      return {
        slug: page.slug,
        type: page.type,
        path: `${path}/${page.slug}`,
        data: {
          title: page.content[page.type].title,
          image: page.content[page.type].image,
        },
      };
    case "menu":
      return {
        slug: page.slug,
        type: page.type,
        path: `${path}/${page.slug}`,
        data: {
          title: page.content[page.type].title,
          description: page.content[page.type].description,
          buttons: page.content[page.type].buttons,
        },
      };
    case "schedule":
      return {
        slug: page.slug,
        type: page.type,
        path: `${path}/${page.slug}`,
        data: {
          title: page.content[page.type].title,
          days: page.content[page.type].days.map((day: any) => ({
            day: day.day.map((event: any) => ({
              ...event,
              icon: event.icon,
            })),
          })),
        },
      };
    case "video":
      return {
        slug: page.slug,
        type: page.type,
        path: `${path}/${page.slug}`,
        data: {
          title: page.content[page.type].title,
          video: page.content[page.type].id,
        },
      };
  }
};

export const cleanData = (data: any) => {
  console.log(data);
  console.log("cleanData");

  const pages: any[] = [];

  // root page
  pages.push({
    slug: "root",
    type: "root",
    path: "",
    data: {
      buttons: [
        ...data.acf.content.map((button: any) => ({
          label: button.meta.label,
          icon: button.meta.icon,
          slug: button.slug,
          url:
            button.meta.type === "external" ? button[button.meta.type].url : "",
          enabled: button.meta.enabled,
          type: button.meta.type,
        })),
      ],
    },
  });

  // main pages
  data.acf.content
    .filter((page: any) => page.meta.type !== "external")
    .forEach((page: any) => {
      pages.push(
        getPageData(page, `/${programSlug[data.program]}/${data.slug}`)
      );
    });

  // sub pages
  data.acf.content
    .filter((page: any) => page.meta.type === "menu")
    .forEach((page: any) => {
      page.menu.buttons
        .filter(
          (newPage: any) =>
            newPage.type === "app" ||
            newPage.type === "contacts" ||
            newPage.type === "connect" ||
            newPage.type === "embedded" ||
            newPage.type === "grid" ||
            newPage.type === "image" ||
            newPage.type === "menu" ||
            newPage.type === "schedule" ||
            newPage.type === "video"
        )
        .forEach((newPage: any) => {
          console.log(newPage);
          pages.push(
            getSubPageData(
              newPage,
              `/${programSlug[data.program]}/${data.slug}/${page.slug}`
            )
          );
          // add sub sub pages
          if (newPage.type === "menu") {
            console.log(newPage.content.menu.buttons);
            newPage.content.menu.buttons.forEach((subPage: any) => {
              pages.push(
                getSubPageData(
                  subPage,
                  `/${programSlug[data.program]}/${data.slug}/${page.slug}/${
                    newPage.slug
                  }`
                )
              );
              if (subPage.type === "menu") {
                subPage.content.menu.buttons.forEach((subSubPage: any) => {
                  pages.push(
                    getSubPageData(
                      subSubPage,
                      `/${programSlug[data.program]}/${data.slug}/${
                        page.slug
                      }/${newPage.slug}/${subPage.slug}`
                    )
                  );
                });
              }
            });
          }
        });
    });

  return {
    meta: {
      id: data.id,
      slug: data.slug,
      title: data.title.rendered,
      program: programSlug[data.program],
      location: data.acf.location,
      startDate: data.acf.start_date,
      endDate: data.acf.end_date,
    },
    pages: pages,
  };
};
