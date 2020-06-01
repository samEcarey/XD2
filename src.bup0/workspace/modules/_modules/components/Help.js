import React, { useContext } from "react";
import { HelpDrawer } from '../helpdrawer'

import { AppContext } from "app/data";
import { I18nProvider, translate, LanguageSwitcher } from "app/languages";

import { StyledThemeSwitcherHeader } from "app/theme/styles";
import { ThemeSwitcher } from "app/theme";

export const Help = () => {
	const { state } = useContext(AppContext);

	return (
		<HelpDrawer>
			<StyledThemeSwitcherHeader>
				<LanguageSwitcher />
				{translate("hello", { name: "Mario" })}
				<ThemeSwitcher />
			</StyledThemeSwitcherHeader>
		</HelpDrawer>
	);
};
