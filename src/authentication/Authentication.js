import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { AuthRoutes } from "../appsystem";
import { Screen } from "../appbase";

import { fakeAuth, AuthSignOut, AuthNotLoggedInMsg } from "./private";

export function Authentication() {
	let history = useHistory();
	return (
		<Screen className="Authentication-screen" type="auth">
			<h1>Authentication</h1>
			{fakeAuth.isAuthenticated ? <AuthSignOut /> : <AuthNotLoggedInMsg />}
			<AuthRoutes />
			<Redirect to="/auth/login" />
		</Screen>
	);
}
