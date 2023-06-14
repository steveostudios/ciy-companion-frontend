import { api, categoryMap } from "./data";

export const getEvent = () => {
  const localEvent = localStorage.getItem("event");
  if (localEvent === "undefined") return null;
  return localEvent ? JSON.parse(localEvent) : null;
};

export const fetchEvent = async (slug: string) => {
  console.log("FETCHING EVENT");
  const url = `${
    api[process.env.REACT_APP_ENV || "dev"]
  }/wp-json/wp/v2/events?slug=${slug}&acf_format=standard`;
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

export const fetchEvents = async (program: string, page: number) => {
  if (!program) return;
  console.log("FETCHING EVENTS");
  const url = `${
    api[process.env.REACT_APP_ENV || "dev"]
  }/wp-json/wp/v2/events?program=${
    categoryMap[program]
  }&per_page=10&_fields[]=title.rendered&_fields[]=acf.location&_fields[]=acf.start_date&_fields[]=acf.end_date&_fields[]=slug&acf_format=standard&status=publish&page=${page}`;

  const response = await fetch(url);
  const data = await response.json();
  const pages = await response.headers.get("X-WP-TotalPages");

  events.push(...data);

  if (page < 3) {
    await fetchEvents(program, page + 1);
  }
  return { events, pages };
};

export const getColors = () => {
  const localColors = localStorage.getItem("colors");
  if (!localColors || localColors === "undefined") return null;
  return localColors ? JSON.parse(localColors) : null;
};

export const fetchColors = async () => {
  console.log("FETCHING COLORS");
  const url = `${
    api[process.env.REACT_APP_ENV || "dev"]
  }/wp-json/wp/v2/colors?_fields[]=id&_fields[]=acf.color&_fields[]=title.rendered`;

  const response = await fetch(url);
  const data = await response.json();

  const colors = data.map((item: APIColor) => ({
    id: item.id,
    color: item.acf.color,
    name: item.title.rendered,
  }));
  localStorage.setItem("colors", JSON.stringify(colors));
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
