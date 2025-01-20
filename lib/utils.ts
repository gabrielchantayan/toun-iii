import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Removes the protocol and www. from a URL.
 *
 * @param url - The URL to clean
 * @returns The cleaned URL
 * @example
 * remove_url_protocol("https://www.example.com/") // "example.com"
 * remove_url_protocol("http://example.com") // "example.com"
 * remove_url_protocol("ftp://example.com") // "example.com"
 */
export const remove_url_protocol = (url : string) => {
	  return url.replace(/(^\w+:|^)\/\//, '').replace(/^www\./, '');
};


/**
 * Removes the protocol and www. from a URL and removes the trailing slash.
 *
 * @param url - The URL to clean
 * @returns The cleaned URL
 * @example
 * clean_url("https://www.example.com/") // "example.com"
 * clean_url("http://example.com") // "example.com"
 * clean_url("ftp://example.com") // "example.com"
 * clean_url("example.com/") // "example.com"
 */
export const clean_url = (url: string): string => {
  return remove_url_protocol(url).replace(/\/$/, "");
};
