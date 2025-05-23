'use client';

import { initialize_theme } from '@/lib/theme-manager';
import { useLayoutEffect } from 'react';

/**
 * A component that initializes the theme of the application.
 * It uses the {@link initialize_theme} function from the theme manager to set the theme.
 * It uses the {@link useLayoutEffect} hook from React to initialize the theme when the component mounts.
 */
const ThemeProvider = () => {
	// Initialize the theme when the component mounts
	useLayoutEffect(initialize_theme, []);

	return null;
};

export default ThemeProvider;

