import type { PageMeta } from "../types/page";

export const HOME_PAGE: PageMeta = {
  number: "100",
  title: "Seefax Index",
  route: "/100",
};

export const PAGES: PageMeta[] = [
  { number: "101", title: "Cookery", route: "/101" },
  { number: "102", title: "Entertainment", route: "/102" },
  { number: "105", title: "Films", route: "/105" },
  { number: "120", title: "Lottery", route: "/120" },
  { number: "130", title: "Weather", route: "/130" },
  { number: "180", title: "Joke", route: "/180" },
  { number: "200", title: "About Seefax", route: "/200" },
];

export const ALL_PAGES: PageMeta[] = [HOME_PAGE, ...PAGES];

export function findPageByNumber(number: string): PageMeta | undefined {
  return ALL_PAGES.find((page) => page.number === number);
}
