import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "../../authentication";

import { Website } from "../../website";
import { Authentication } from "../../authentication";
import { Workspace } from "../../workspace";

export const ScreenRoutes = () => {
	return (
		<>
			<Switch>
				<Route exact path="/">
					<Website />
				</Route>
				<Route path="/auth">
					<Authentication />
				</Route>
				<PrivateRoute exact path="/workspace">
					<Workspace />
				</PrivateRoute>
			</Switch>
		</>
	);
};
