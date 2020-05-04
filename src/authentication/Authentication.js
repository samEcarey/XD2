import React from "react";
import { Redirect } from "react-router-dom";
import { AuthRoutes } from "../appsystem";
import { Screen } from "../appbase";

export function Authentication() {
	return (
		<Screen className="Authentication-screen" type="auth">
			<h1>Authentication</h1>
			<AuthRoutes />
			<Redirect to="/auth/login" />
		</Screen>
	);
}
