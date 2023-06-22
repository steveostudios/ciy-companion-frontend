import { api, categoryMap } from "./data";

export interface APISimpleEvent {
  slug: string;
  title: {
    rendered: string;
  };
  acf: {
    location: string;
    start_date: string;
    end_date: string;
  };
}

const events: APISimpleEvent[] = [];

const eventsUrlParams: string = [
  "id",
  "slug",
  "type",
  "acf",
  "status",
  "title.rendered",
  "program",
  "acf.start_date",
  "acf.end_date",
  "acf.location",
].join(",");

export const fetchEvents = async (program: string, page: number) => {
  if (!program) return;
  console.log("FETCHING EVENTS");
  const url = `${
    api[process.env.REACT_APP_ENV || "dev"]
  }/wp-json/wp/v2/events?program=${
    categoryMap[program]
  }&per_page=10&acf_format=standard&status=publish&page=${page}&_fields=${eventsUrlParams}`;

  const response = await fetch(url);
  const data = await response.json();
  const pages = await response.headers.get("X-WP-TotalPages");
  const pagesInt: number = pages ? parseInt(pages) : 1;

  events.push(...data);

  if (page < pagesInt) {
    await fetchEvents(program, page + 1);
  }

  return { events, pages };
};
