import React from "react";
import { Switch, Route,Redirect } from "react-router-dom";
import {
	Login,
	ConfirmCode,
	ResetPassword,
	Register,
	ForgotPassword
} from "Auth";
import { PublicRoute } from "./PublicRoute";

export const AuthRoutes = () => {
	return (
		<Switch>
			<PublicRoute component={Login} path="/auth/login" exact />
			<PublicRoute component={ForgotPassword} path="/auth/forgot" exact />
			

			<Route render={() => <Redirect to={{ pathname: "/auth/login" }} />} />
		</Switch>
	);
};
