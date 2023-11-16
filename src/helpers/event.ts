import { api, programSlug } from "./data";
import { RouteType } from "./types";

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
    case RouteType.APP:
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
    case RouteType.CONTACTS:
      return {
        slug: page.slug,
        type: page.meta.type,
        path: `${path}/${page.slug}`,
        data: {
          title: page[page.meta.type].title,
          description: page[page.meta.type].description,
          contacts: page[page.meta.type].contacts.map((contact: any) => ({
            ...contact,
            image: contact?.image?.sizes?.thumbnail || null,
          })),
        },
      };
    case RouteType.CONNECT:
      return {
        slug: page.slug,
        type: page.meta.type,
        path: `${path}/${page.slug}`,
        data: {
          title: page[page.meta.type].title,
          connections: page[page.meta.type].connect,
        },
      };
    case RouteType.EMBEDDED:
      return {
        slug: page.slug,
        type: page.meta.type,
        path: `${path}/${page.slug}`,
        data: {
          title: page[page.meta.type].title,
          url: page[page.meta.type].url,
        },
      };
    case RouteType.GRID:
      return {
        slug: page.slug,
        type: page.meta.type,
        path: `${path}/${page.slug}`,
        data: {
          title: page[page.meta.type].title,
          description: page[page.meta.type].description,
          images: page[page.meta.type].images.map((image: any) => ({
            ...image,
            image: image.image.sizes.thumbnail,
          })),
        },
      };
    case RouteType.IMAGE:
      return {
        slug: page.slug,
        type: page.meta.type,
        path: `${path}/${page.slug}`,
        data: {
          title: page[page.meta.type].title,
          image: page[page.meta.type].image,
        },
      };
    case RouteType.MENU:
      console.log(page);
      return {
        slug: page.slug,
        type: page.meta.type,
        path: `${path}/${page.slug}`,
        data: {
          title: page[page.meta.type].title,
          description: page[page.meta.type].description,
          buttons:
            Array.isArray(page[page.meta.type].buttons) &&
            page[page.meta.type].buttons.map((button: any) =>
              button.meta.type === RouteType.EXTERNAL
                ? {
                    label: button.meta.label,
                    slug: button.meta.slug,
                    href: button.content.external.url,
                    enabled: button.meta.enabled,
                  }
                : {
                    label: button.meta.label,
                    slug: button.meta.slug,
                    enabled: button.meta.enabled,
                    type: button.meta.type,
                  }
            ),
        },
      };
    case RouteType.SCHEDULE:
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
    case RouteType.VIDEO:
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
  switch (page.meta.type) {
    case RouteType.APP:
      return {
        slug: page.meta.slug,
        type: page.meta.type,
        path: `${path}/${page.meta.slug}`,
        data: {
          title: page.content[page.meta.type].title,
          name: page.content[page.meta.type].name,
          appleStoreUrl: page.content[page.meta.type].apple_store_url,
          googlePlayStoreUrl:
            page.content[page.meta.type].google_play_store_url,
          icon: page.content[page.meta.type].icon,
          description: page.content[page.meta.type].description,
        },
      };
    case RouteType.CONTACTS:
      return {
        slug: page.meta.slug,
        type: page.meta.type,
        path: `${path}/${page.meta.slug}`,
        data: {
          title: page.content[page.meta.type].title,
          description: page.content[page.meta.type].description,
          contacts: page.content[page.meta.type].contacts.map(
            (contact: any) => ({
              ...contact,
              image: contact.image.sizes.thumbnail,
            })
          ),
        },
      };
    case RouteType.CONNECT:
      return {
        slug: page.meta.slug,
        type: page.meta.type,
        path: `${path}/${page.meta.slug}`,
        data: {
          title: page.content[page.meta.type].title,
          connections: page.content[page.meta.type].connect,
        },
      };
    case RouteType.EMBEDDED:
      return {
        slug: page.meta.slug,
        type: page.meta.type,
        path: `${path}/${page.meta.slug}`,
        data: {
          title: page.content[page.meta.type].title,
          url: page.content[page.meta.type].url,
        },
      };
    case RouteType.EXTERNAL:
      return {
        slug: page.meta.slug,
        type: page.meta.type,
        path: `${path}/${page.meta.slug}`,
        data: {
          title: page.content[page.meta.type].title,
          url: page.content[page.meta.type].url,
        },
      };
    case RouteType.GRID:
      return {
        slug: page.meta.slug,
        type: page.meta.type,
        path: `${path}/${page.meta.slug}`,
        data: {
          title: page.content[page.meta.type].title,
          description: page.content[page.meta.type].description,
          images: page.content[page.meta.type].images.map((image: any) => ({
            ...image,
            image: image.image.sizes.thumbnail,
          })),
        },
      };
    case RouteType.IMAGE:
      return {
        slug: page.meta.slug,
        type: page.meta.type,
        path: `${path}/${page.meta.slug}`,
        data: {
          title: page.content[page.meta.type].title || "",
          image: page.content[page.meta.type].image || "",
        },
      };
    case RouteType.MENU:
      console.log(page);
      return {
        slug: page.meta.slug,
        type: page.meta.type,
        path: `${path}/${page.meta.slug}`,
        data: {
          title: page.content[page.meta.type].title,
          description: page.content[page.meta.type].description,
          buttons:
            Array.isArray(page.content[page.meta.type].buttons) &&
            page.content[page.meta.type].buttons.map((button: any) =>
              button.meta.type === RouteType.EXTERNAL
                ? {
                    label: button.meta.label,
                    slug: button.meta.slug,
                    href: button.content.external.url,
                    enabled: button.meta.enabled,
                  }
                : {
                    label: button.meta.label,
                    slug: button.meta.slug,
                    enabled: button.meta.enabled,
                    type: button.meta.type,
                  }
            ),
        },
      };
    case RouteType.SCHEDULE:
      return {
        slug: page.meta.slug,
        type: page.meta.type,
        path: `${path}/${page.meta.slug}`,
        data: {
          title: page.content[page.meta.type].title,
          days: page.content[page.meta.type].days.map((day: any) => ({
            day: day.day.map((event: any) => ({
              ...event,
              icon: event.icon,
            })),
          })),
        },
      };
    case RouteType.VIDEO:
      return {
        slug: page.meta.slug,
        type: page.meta.type,
        path: `${path}/${page.meta.slug}`,
        data: {
          title: page.content[page.meta.type].title,
          video: page.content[page.meta.type].id,
        },
      };
  }
};

export const cleanData = (data: any) => {
  console.table(
    data.acf.content.map((page: any) => ({
      type: page.meta.type,
      data: page[page.meta.type],
    }))
  );

  const comingSoon = data.acf.coming_soon ? data.acf.coming_soon_data : false;

  const pages: any[] = [];

  // root page
  pages.push({
    slug: "root",
    type: "root",
    path: `/${programSlug[data.program]}/${data.slug}`,
    data: {
      buttons: [
        ...data.acf.content.map((button: any) => ({
          label: button.meta.label,
          icon: button.meta.icon,
          slug: button.slug,
          url:
            button.meta.type === RouteType.EXTERNAL
              ? button[button.meta.type].url
              : "",
          enabled: button.meta.enabled,
          type: button.meta.type,
        })),
      ],
    },
  });

  // main pages
  data.acf.content
    .filter((page: any) => page.meta.type !== RouteType.EXTERNAL)
    .forEach((page: any) => {
      pages.push(
        getPageData(page, `/${programSlug[data.program]}/${data.slug}`)
      );
    });

  // sub pages
  data.acf.content
    .filter((page: any) => page.meta.type === RouteType.MENU)
    .forEach((page: any) => {
      console.log(page);
      Array.isArray(page.menu.buttons) &&
        page.menu.buttons.forEach((subPage: any) => {
          console.log(subPage);
          pages.push(
            getSubPageData(
              subPage,
              `/${programSlug[data.program]}/${data.slug}/${page.slug}`
            )
          );
          // add sub sub pages
          if (subPage.meta.type === RouteType.MENU) {
            console.log(subPage.content.menu.buttons);
            Array.isArray(subPage.content.menu.buttons) &&
              subPage.content.menu.buttons.forEach((subSubPage: any) => {
                pages.push(
                  getSubPageData(
                    subSubPage,
                    `/${programSlug[data.program]}/${data.slug}/${page.slug}/${
                      subPage.meta.slug
                    }`
                  )
                );
                if (subSubPage.meta.type === RouteType.MENU) {
                  Array.isArray(subSubPage.content.menu.buttons) &&
                    subSubPage.content.menu.buttons.forEach(
                      (subSubSubPage: any) => {
                        pages.push(
                          getSubPageData(
                            subSubSubPage,
                            `/${programSlug[data.program]}/${data.slug}/${
                              page.slug
                            }/${subPage.slug}/${subSubPage.slug}`
                          )
                        );
                      }
                    );
                }
              });
          }
        });
    });

  console.table(pages);

  return {
    comingSoon,
    meta: {
      id: data.id,
      slug: data.slug,
      title: data.title.rendered,
      program: programSlug[data.program],
      location: data.acf.location,
      startDate: data.acf.start_date,
      endDate: data.acf.end_date,
    },
    pages: pages.filter((item: any) => item !== undefined),
  };
};
