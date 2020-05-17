import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { AuthRoutes } from "app/config";
import { Screen } from "app/common";

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
