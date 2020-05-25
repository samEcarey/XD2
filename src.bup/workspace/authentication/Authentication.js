import React, { useContext } from "react";
import { StyledScreen, StyledWrapper, StyledGrid } from "./_includes";

import { AuthHeader } from "./authheader";
import { AuthMain } from "./authmain";
// import { AuthAside } from "./authaside";
// import { AuthFooter } from "./authfooter";

import { AppContext } from "context";
import { I18nProvider, translate, LanguageSwitcher } from "app/languages";

import { StyledThemeSwitcherHeader } from "app/theme/styles";
import { ThemeSwitcher } from "app/theme";

export const Authentication = () => {
	const { state } = useContext(AppContext);

	return (
		<I18nProvider locale={state.appLanguage}>
			<StyledScreen classes="Authentication-screen" type="auth">
				{/* <StyledThemeSwitcherHeader>
					<LanguageSwitcher />
					{translate("hello", { name: "Mario" })}
					<ThemeSwitcher />
				</StyledThemeSwitcherHeader> */}
				<StyledWrapper className="AuthWrapper">
					<StyledGrid className="Auth-grid">
						<AuthHeader />
						<AuthMain />
						{/* <AuthAside /> */}
						{/* <AuthFooter /> */}
					</StyledGrid>
				</StyledWrapper>
			</StyledScreen>
		</I18nProvider>
	);
};
