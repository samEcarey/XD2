import React, { useContext } from "react";
import { HelpDrawer, HelpTabs, HelpUserHistory, HelpUserSettings } from '../../helpdrawer'

import { AppContext } from "app/data";
import { I18nProvider, translate, LanguageSwitcher } from "app/languages";

import { StyledThemeSwitcherHeader } from "app/theme/styles";
import { ThemeSwitcher } from "app/theme";

export const Help = () => {
	const { state } = useContext(AppContext);

	return (
		<HelpDrawer>
			{/* <StyledThemeSwitcherHeader>
				<LanguageSwitcher />
				{translate("hello", { name: "Mario" })}
				<ThemeSwitcher />
			</StyledThemeSwitcherHeader> */}
			<h2>Activity Log</h2>
			<HelpTabs>
				<div label="History">
					<HelpUserHistory />
				</div>
				<div label="User Settings">
					<HelpUserSettings />
				</div>
			</HelpTabs>
		</HelpDrawer>
	);
};
