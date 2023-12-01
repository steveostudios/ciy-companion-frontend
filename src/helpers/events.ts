import { api, categoryMap } from "./data";

export interface APISimpleEvent {
  slug: string;
  acf: {
    location: string;
    start_date: string;
    end_date: string;
    title: string;
  };
}

const eventsUrlParams: string = [
  "id",
  "slug",
  "type",
  "acf",
  "status",
  "program",
  "acf.start_date",
  "acf.end_date",
  "acf.location",
].join(",");

export const fetchEvents = async (program: string) => {
  let events: APISimpleEvent[] = [];
  events.length = 0;
  if (!program) return;
  await fetchPage(program, 1, events);
  return { events };
};

const fetchPage = async (
  program: string,
  page: number,
  events: APISimpleEvent[]
) => {
  if (!program) return;
  const url = `${
    api[process.env.REACT_APP_ENV || "dev"]
  }/wp-json/wp/v2/events?program=${
    categoryMap[program]
  }&per_page=3&acf_format=standard&status=publish&page=${page}&_fields=${eventsUrlParams}`;

  const response = await fetch(url);
  const data = await response.json();
  const pages = await response.headers.get("X-WP-TotalPages");
  const pagesInt: number = pages ? parseInt(pages) : 1;

  events.push(...data);

  if (page < pagesInt) {
    await fetchPage(program, page + 1, events);
  }

  return { events, pages };
};
