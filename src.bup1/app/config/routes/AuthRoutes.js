import React from "react";
import { Switch, Route } from "react-router-dom";
import {
	Login,
	LoggedOut,
	Register,
	ForgotPassword
} from "workspace/authentication";

export const AuthRoutes = () => {
	return (
		<Switch>
			<Route
				path="/workspace/auth"
				component={Login}
				exact={true}
				strict={true}
			/>
			<Route
				path="/workspace/auth/login"
				component={Login}
				exact={true}
				strict={true}
			/>
			<Route
				path="/workspace/auth/loggedout"
				component={LoggedOut}
				exact={true}
				strict={true}
			/>
			<Route
				path="/workspace/auth/register"
				component={Register}
				exact={true}
				strict={true}
			/>
			<Route
				path="/workspace/auth/forgotpassword"
				component={ForgotPassword}
				exact={true}
				strict={true}
			/>
		</Switch>
	);
};
