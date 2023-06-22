import { api } from "./data";

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
