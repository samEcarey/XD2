import React from "react";
import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "../../authentication";

import { Website, Framer } from "../../website";
import { Authentication } from "../../authentication";
import { Workspace } from "../../workspace";
import { WorkspaceScreen } from "../../workspacescreen";

export const ScreenRoutes = () => {
	return (
		<>
			<Switch>
				<Route exact path="/">
					<Website />
				</Route>
				<Route exact path="/framer" component={Framer} />
				<Route path="/auth">
					<Authentication />
				</Route>
				{/* <PrivateRoute exact path="/workspace">
					<Workspace />
				</PrivateRoute> */}
				<Route exact path="/workspace">
					<Workspace />
				</Route>
				<Route exact path="/workspacescreen" component={WorkspaceScreen} />
			</Switch>
		</>
	);
};
