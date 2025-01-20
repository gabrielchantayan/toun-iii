
import { Input } from './ui/input';
import { useTranslations } from 'next-intl';


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


	return (
		<Input placeholder={t('start-typing')} className='mb-4' />
	);
};
export default Searchbar;

