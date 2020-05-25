import React, { useContext } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { AuthRoutes } from "app/config";

import { fakeAuth, AuthSignOut, AuthNotLoggedInMsg } from "./private";

import { AppContext } from "context";
import { I18nProvider, translate } from "app/languages";
import { LanguageSwitcher } from "../app/languages";

import { StyledThemeSwitcherHeader } from "app/theme/styles";
import { ThemeSwitcher } from "app/theme";

export function Authentication() {
	const { state } = useContext(AppContext);
	let history = useHistory();

	return (
		<section className="Authentication-screen" type="auth">
			<h1>Authentication</h1>
			{fakeAuth.isAuthenticated ? <AuthSignOut /> : <AuthNotLoggedInMsg />}
			<AuthRoutes />
			<Redirect to="/auth/login" />
		</section>
	);
}
