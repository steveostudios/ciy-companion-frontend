import { api } from "./data";

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
    localStorage.setItem("event", JSON.stringify(data[0]));
    localStorage.setItem("eventCacheTime", Date.now().toString());
    return data[0];
  }
};

export const clearEvent = () => {
  localStorage.removeItem("event");
  localStorage.removeItem("eventCacheTime");
};
