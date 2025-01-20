import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const remove_url_protocol = (url : string) => {
	  return url.replace(/(^\w+:|^)\/\//, '').replace(/^www\./, '');
};

export const clean_url = (url : string) => {
  return remove_url_protocol(url).replace(/\/$/, '');
};