import React from "react";
import { Switch, Route } from "react-router-dom";

import { Website } from "website";
import { Workspace, Authentication as WorkspaceAuth } from "workspace";

export const AppRoutes = () => {
	return (
		<>
			<Switch>
				<Route path="/workspace/auth" component={WorkspaceAuth} />
				<Route path="/workspace" component={Workspace} />
				<Route path="/" component={Website} />
			</Switch>
		</>
	);
};
