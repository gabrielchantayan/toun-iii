'use client';
import { useTranslations } from 'next-intl';
import prefixes from '@/data/prefixes.json';
import apps from '@/data/apps.json';
import Fuse from 'fuse.js';
import { AutofillInput } from './ui/autofill-input';

const prefixKeys = Object.keys(prefixes) as Array<keyof typeof prefixes>;

const fuseOptions = {
	keys: ['name'],
};
const fuse = new Fuse(
	apps.flatMap((app) => app.apps),
	fuseOptions
);

const search = (item: string) => {
	// See if the search is a prefixed search
	const prefix = prefixKeys.find((key) => item.startsWith(`${key} `));

	// If so, redirect to the corresponding URL
	if (prefix) {
		window.location.href = prefixes[prefix].query + item.slice(prefix.length);
	}
	// If the item stsrts with two periods, then use fuzzy search to find an application or bookmark
	else if (item.match(/^.[\w\d]{2}/)) {
		window.location.href = fuse.search(item.slice(2))[0]?.item.url || 'https://google.com/search?q=' + item.slice(1);
	}
	// Otherwise, redirect to Google
	else {
		window.location.href = 'https://google.com/search?q=' + item;
	}
};

/**
 * A searchbar component which uses the `Command` component from `cmdk`.
 *
 * It provides a text input which accepts a search query, and a dropdown list
 * which displays search results. The list is divided into two sections: a
 * "Suggestions" section which displays suggested commands, and a "Settings"
 * section which displays links to settings pages.
 *
 * When the searchbar is focused, the document body's `overflow` style is set to
 * `"hidden"` to prevent the page from being scrollable. When the searchbar is
 * blurred, the `overflow` style is set back to `"auto"`.
 */
const Searchbar = () => {
	const t = useTranslations('searchbar');

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			search((e.target as HTMLInputElement).value);
		}
	};

	return <AutofillInput placeholder={t('start-typing')} className='mb-4' autoFocus onKeyDown={handleKeyDown} />;
};
export default Searchbar;
