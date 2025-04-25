'use client';

import themes from '../data/themes.json';

/**
 * Initializes the theme of the application.
 *
 * It checks if a theme is set in local storage. If a theme is set,
 * it applies the theme to the document. If no theme is set, it
 * applies the default theme.
 *
 * The theme is stored in local storage as key-value pairs. The
 * key is prefixed with `--color-` and the value is the color
 * value. For example, `--color-primary` is set to the primary
 * color of the theme.
 */
export const initialize_theme = () => {
	// Check if theme is set in local storage
	const theme = localStorage.getItem('--color-primary');
	if (theme) {
		// Apply the theme from local storage
		document.documentElement.style.cssText = Object.entries(localStorage)
			.filter(([key]) => key.includes('color-'))
			.map(([key, value]) => `${key}: ${value}`)
			.join('; ');
	}

	// If theme is not set in local storage, set default theme
	else {
		apply_theme_by_name('blackboard');
	}

}

/**
 * Applies a theme to the application.
 *
 * If no theme name is provided, the default theme ("blackboard") is used.
 *
 * The theme is applied by setting the color properties on the document
 * element. The color properties are set using the following syntax:
 * `--color-${key}` where `key` is the name of the color property.
 *
 * The theme is also stored in local storage so that the theme is
 * persisted across page reloads.
 *
 * @param theme - The name of the theme to apply
 */
export const apply_theme_by_name = (theme: string = 'blackboard') => {

	// If the theme does not exist, use the default theme
	if (!themes['themes'].hasOwnProperty(theme)) theme = 'blackboard';

	
	// Apply the theme by setting the color properties on the document element
	for (const [key, color] of Object.entries(themes['themes'][theme as keyof typeof themes['themes']]['colors'])) {
		document.documentElement.style.setProperty(`--color-${key}`, color as string);

		// Set in local storage
		localStorage.setItem(`--color-${key}`, color as string);
	}
};


/**
 * Applies a theme to the application.
 *
 * This function takes an object with key-value pairs where the key is the name of the color property
 * and the value is the color value. For example, `{ primary: '#000000', accent: '#FFFFFF' }`.
 *
 * The theme is applied by setting the color properties on the document element. The color properties
 * are set using the following syntax: `--color-${key}` where `key` is the name of the color property.
 *
 * The theme is also stored in local storage so that the theme is persisted across page reloads.
 *
 * @param properties - An object with key-value pairs where the key is the name of the color property
 *                     and the value is the color value
 */
export const apply_theme_by_properties = (properties: Record<string, string>) => {

	for (const [key, color] of Object.entries(properties)) {
		// Set the color property on the document element
		document.documentElement.style.setProperty(`--color-${key}`, color as string);

		// Set the color property in local storage
		localStorage.setItem(`--color-${key}`, color as string);
	}
}
