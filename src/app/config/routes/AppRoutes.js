import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { useAuth } from "app/data";
import { Website } from "website";
import { Auth } from "Auth";
import { Workspace } from "Workspace";
import { UserContextProvider } from "app/data";

export const AppRoutes = () => {
	const auth = useAuth();
	
	return auth.authState ? (
		<UserContextProvider>
			<Workspace />
		</UserContextProvider>
	) : (
		<Auth />
	);
};
