'use client';

import themes from '../data/themes.json';


export const applyTheme = (theme: string = 'blackboard') => {

	if (!themes['themes'].hasOwnProperty(theme)) theme = 'blackboard';

	
	for (const [key, color] of Object.entries(themes['themes'][theme]['colors'])) {
		document.documentElement.style.setProperty(`--color-${key}`, color);
	}
};

