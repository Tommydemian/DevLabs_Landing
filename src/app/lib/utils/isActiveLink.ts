import { NavLink } from "@/app/types";

export const isActiveLink = (link: NavLink, pathname: string): boolean => {
  const currentPath = pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  const linkPath = `/${link.label?.toLocaleLowerCase()}`;
  return currentPath === linkPath || currentPath.startsWith(linkPath);
};
