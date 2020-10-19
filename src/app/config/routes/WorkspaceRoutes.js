import React from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Dashboard } from "Dashboard";
import { ModuleMenugroups } from "Module-old/routemodulemenugroups";
import { Workflows } from "Module-old/routeworkflows";
import { Tablefull } from "Module-old/routetablefull";
import { PrivateRoute } from "./PrivateRoute";
export const WorkspaceRoutes = () => {
	const location = useLocation();
	return (
		<Switch>
			<Route
				path="/workspace/tablefull"
				component={Tablefull}
				exact={true}
				strict={true}
			/>
			<PrivateRoute
				path="/workspace/workflows"
				component={Workflows}
				exact={true}
				strict={true}
			/>
			<PrivateRoute
				path="/workspace/menu"
				component={ModuleMenugroups}
				exact={true}
				strict={true}
			/>
			<Route
				path="/workspace"
				component={Dashboard}
				exact={true}
				strict={true}
			/>
			<Route render={() => <Redirect to={{ pathname: "/workspace" }} />} />
		</Switch>
	);
};
