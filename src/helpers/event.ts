import { api, categoryMap } from "./data";

export const getEvent = () => {
  const localEvent = localStorage.getItem("event");
  if (localEvent === "undefined") return null;
  return localEvent ? JSON.parse(localEvent) : null;
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
  if (data[0]) return data[0];
};

export const clearEvent = () => {
  localStorage.removeItem("event");
};

// Events
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

export const getColors = () => {
  const localColors = localStorage.getItem("colors");
  if (!localColors || localColors === "undefined") return null;
  return localColors ? JSON.parse(localColors) : null;
};

const colorsUrlParams: string = [
  "id",
  "type",
  "acf.color",
  "title.rendered",
].join(",");

export const fetchColors = async () => {
  console.log("FETCHING COLORS");
  const url = `${
    api[process.env.REACT_APP_ENV || "dev"]
  }/wp-json/wp/v2/colors?_fields=${colorsUrlParams}`;

  const response = await fetch(url);
  const data = await response.json();

  const colors = data.map((item: APIColor) => ({
    id: item.id,
    color: item.acf.color,
    name: item.title.rendered,
  }));
  localStorage.setItem("colors", JSON.stringify(colors));
};

export const clearColors = () => {
  localStorage.removeItem("colors");
};

interface APIColor {
  id: number;
  acf: {
    color: string;
  };
  title: {
    rendered: string;
  };
}

export interface IColor {
  id: number;
  color: string;
  name: string;
}
