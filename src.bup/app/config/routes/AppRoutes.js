import React from "react";
import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "authentication";

import { Website, Framer } from "website";
// import { Authentication } from "authentication";
import { Workspace, Authentication as WorkspaceAuth } from "workspace";

export const ScreenRoutes = () => {
	return (
		<>
			<Switch>
				<Route exact path="/" component={Website} />
				<Route exact path="/framer" component={Framer} />
				{/* <Route path="/auth">
					<Authentication />
				</Route> */}
				{/* <PrivateRoute exact path="/workspace">
					<Workspace />
				</PrivateRoute> */}
				<Route exact path="/workspace">
					<Workspace />
				</Route>
				<Route path="/workspace/auth" component={WorkspaceAuth} />
			</Switch>
		</>
	);
};
