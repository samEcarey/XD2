import React from "react";
import { Switch, Route } from "react-router-dom";
import { Login, LoggedOut, Register, ForgotPassword } from "authentication";

export const AuthRoutes = () => {
	return (
		<Switch>
			<Route path="/auth/login" component={Login} exact={true} strict={true} />
			<Route
				path="/auth/loggedout"
				component={LoggedOut}
				exact={true}
				strict={true}
			/>
			<Route
				path="/auth/register"
				component={Register}
				exact={true}
				strict={true}
			/>
			<Route
				path="/auth/forgotpassword"
				component={ForgotPassword}
				exact={true}
				strict={true}
			/>
		</Switch>
	);
};
