import React from "react";
import { Switch, Route } from "react-router-dom";

import { Website, Framer } from "website";
import { Workspace, Authentication as WorkspaceAuth } from "workspace";

export const ScreenRoutes = () => {
	return (
		<>
			<Switch>
				<Route exact path="/" component={Website} />
				<Route exact path="/framer" component={Framer} />
				<Route exact path="/workspace">
					<Workspace />
				</Route>
				<Route path="/workspace/auth" component={WorkspaceAuth} />
			</Switch>
		</>
	);
};
