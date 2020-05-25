import React, { useContext } from "react";
import { LOCALES } from "../locales";
import { AppContext } from "context";

import { saveToStorage } from "app/data/localstorage/localStorage";

export const LanguageSwitcher = () => {
	const { dispatch } = useContext(AppContext);

	const setLanguageFunc = appLanguage => {
		dispatch({
			type: "setLanguage",
			appLanguage: appLanguage
		});
		saveToStorage("appLanguage", appLanguage);
	};

	return (
		<div>
			{Object.keys(LOCALES).map(locale => {
				return (
					<button key={locale} onClick={() => setLanguageFunc(LOCALES[locale])}>
						{locale}
					</button>
				);
			})}
		</div>
	);
};
