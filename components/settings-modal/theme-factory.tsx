import themes from '../../data/themes.json';
import ThemeButton from './theme-button';
import { useTranslations } from 'next-intl';


/**
 * ThemeFactory is a function that creates a collection of ThemeButton components.
 * The buttons are created by iterating over the themes object, and for each theme,
 * a ThemeButton component is created with the theme's colors and name.
 * The ThemeButton components are then returned as a collection.
 */
const ThemeFactory = () => {
	const built_buttons = [];

	const t = useTranslations('themes');
	console.log(themes);

	// Sort the themes by key

	// @ts-expect-error Sorting an object by key bugs out TS apparently
	themes['themes'] = Object.fromEntries(
		Object.entries(themes['themes']).sort((a, b) => t(a[0]).localeCompare(t(b[0])))
	);

	console.log(themes);

	for (const [key, theme] of Object.entries(themes['themes'])) {
		built_buttons.push(
			<ThemeButton
				key={key}
				primary={theme['colors']['primary']}
				accent={theme['colors']['accent']}
				background={theme['colors']['background']}
				name={t(key)}
			/>
		);
	}

	return <div className='flex flex-row flex-wrap gap-2'>{built_buttons}</div>;
};

export default ThemeFactory;
