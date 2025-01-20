'use client';

import { apply_theme_by_properties } from "@/lib/theme-manager";

/**
 * A button component used to preview a theme.
 * @param {{primary: string, accent: string, background: string, name: string}} props
 * @prop {string} primary - The color of the text.
 * @prop {string} accent - The border color.
 * @prop {string} background - The background color of the button.
 * @prop {string} name - The name of the theme.
 * @returns A React component.
 */
const ThemeButton = ({
	primary,
	accent,
	background,
	name
}: {
	primary: string;
	accent: string;
	background: string;
	name: string;
}) => {
	const set_theme = () => {
        apply_theme_by_properties({
            primary: primary,
            accent: accent,
            background: background
        })
	};

	return (
		<button
			className={`flex flex-row items-center justify-center gap-2 p-2 rounded-sm sm:w-32 sm:h-10 text-center uppercase text-xs border border-2 hover:scale-[1.03] active:scale-[0.98] transition-all duration-150 ease-in-out`}
			style={{ color: primary, borderColor: accent, backgroundColor: background }}
			onClick={set_theme}>
			{name}
		</button>
	);
};

export default ThemeButton;
