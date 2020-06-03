import { DARCULA, APPLE, BASIC, EDSTHEME, DARKMODE, LIGHTMODE } from "./themes";
import THEMES from "./themeList";

export const getTheme = themeName => {
	switch (themeName) {
		case THEMES.DARCULA:
			return DARCULA;
		case THEMES.APPLE:
			return APPLE;
		case THEMES.EDSTHEME:
			return EDSTHEME;
		case THEMES.DARKMODE:
			return DARKMODE;
		case THEMES.LIGHTMODE:
			return LIGHTMODE;
		default:
			return BASIC;
	}
};
