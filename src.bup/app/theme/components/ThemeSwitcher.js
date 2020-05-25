import React, { useContext } from "react";
import THEMES from "../themeList";
import { AppContext } from "context";

import { saveToStorage } from "app/data/localstorage/localStorage";

export const ThemeSwitcher = () => {
	const { dispatch } = useContext(AppContext);

	const setThemeFunc = themeName => {
		dispatch({
			type: "setTheme",
			themeName: themeName
		});
		saveToStorage("themeName", themeName);
	};

	return (
		<div>
			{Object.keys(THEMES).map(theme => {
				return (
					<button key={theme} onClick={() => setThemeFunc(THEMES[theme])}>
						{theme}
					</button>
				);
			})}
		</div>
	);
};
