import { LOCALES } from "app/languages";
import THEMES from "app/theme/themeList";
import { getFromStorage } from "app/data/localstorage/localStorage";

export default {
	appLanguage: getFromStorage("appLanguage") || LOCALES.ENGLISH,
	themeName: getFromStorage("themeName") || THEMES.APPLE,
	author: "Mario Mecaroni"
};

// export default {
// 	appLanguage: LOCALES.ENGLISH,
// 	themeName: THEMES.APPLE,
// 	author: "Mario Mecaroni"
// };

// import THEMES from "../themes/themeList";
// import { getFromStorage } from "../../utils/sessionStorage";
// import { LOCALES } from "../i18n/locales";

// export default {
// 	themeName: getFromStorage("themeName") || THEMES.APPLE,
// 	siteLang: getFromStorage("siteLang") || LOCALES.ENGLISH,
// 	name: "Maksym"
// };
