'use client'

import { initialize_theme } from "@/lib/theme-manager";
import { useLayoutEffect } from "react";

const ThemeProvider = () => {

    useLayoutEffect(() => {
		initialize_theme();
	}, []);

    return null

}

export default ThemeProvider