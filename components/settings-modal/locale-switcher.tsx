import { readdirSync, readFileSync } from 'fs';
import LocaleSwitcherClient from './locale-switcher-client';

/**
 * LocaleSwitcher is a component that provides a user interface for selecting
 * the language.
 */
export default function LocaleSwitcher() {
	/**
	 * The list of available languages is determined by reading the contents
	 * of the "messages" directory. The contents of the directory are the
	 * names of the files. The names of the files must be in the format
	 * "language.json" where "language" is the language code.
	 */
	const files = readdirSync('messages');

	/**
	 * Read each file and extract the "language" property
	 */
	const routing = files
		.map((file) => {
			const data = JSON.parse(readFileSync(`messages/${file}`, 'utf8'));
			return [file.split('.')[0], data.language];
		})
		.sort((a, b) => a[1].localeCompare(b[1]));

	/**
	 * This is the function that is called when the user selects a new
	 * language from the dropdown. The function sets the cookie and reloads
	 * the page.
	 */
	const l = (new_locale: string) => {
		document.cookie = `NEXT_LOCALE=${new_locale}; path=/`;
	};

	/**
	 * Render the component.
	 */
	return <LocaleSwitcherClient routing={routing} />;
}
