import themes from '../../data/themes.json';
import ThemeButton from './theme-button';

/**
 * ThemeFactory is a function that creates a collection of ThemeButton components.
 * The buttons are created by iterating over the themes object, and for each theme,
 * a ThemeButton component is created with the theme's colors and name.
 * The ThemeButton components are then returned as a collection.
 */
const ThemeFactory = () => {
	const built_buttons = [];

	for (const [key, theme] of Object.entries(themes['themes'])) {
		built_buttons.push(
			<ThemeButton
				key={key}
				primary={theme['colors']['primary']}
				accent={theme['colors']['accent']}
				background={theme['colors']['background']}
				name={theme['name']}
			/>
		);
	}

	return <div className='flex flex-row flex-wrap gap-2'>{built_buttons}</div>;
};

export default ThemeFactory;
