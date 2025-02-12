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
	const routing: Array<[string, string]> = files
		.map((file) => {
			const data = JSON.parse(readFileSync(`messages/${file}`, 'utf8'));
			return [file.split('.')[0], data.language] as [string, string];
		})
		.sort((a, b) => a[1].localeCompare(b[1]));

	/**
	 * Render the component.
	 */
	return <LocaleSwitcherClient routing={routing} />;
}
