import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Dashboard } from "workspace/modules";
import { ModuleMenugroups } from "workspace/modules/routemodulemenugroups";
import { Workflows } from "workspace/modules/routeworkflows";
import { Tablefull } from "workspace/modules/routetablefull";

export const WorkspaceRoutes = () => {
	const location = useLocation();
	return (
		
			<Switch location={location} key={location.pathname}>
				<Route
					path="/workspace/extraduty/accounting/tableapp-demo"
					component={Tablefull}
					exact={true}
					strict={true}
				/>
				<Route
					path="/workspace/extraduty/accounting/:workflowSlug"
					component={Workflows}
					exact={true}
					strict={true}
				/>
				<Route
					path="/workspace/extraduty/accounting"
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
		</Switch>
		
	);
};
