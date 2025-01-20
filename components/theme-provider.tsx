'use client'

import { applyTheme } from "@/lib/theme-manager";
import { useLayoutEffect } from "react";

const ThemeProvider = () => {

    useLayoutEffect(() => {
		applyTheme();
	}, []);

    return null

}

export default ThemeProvider