import React from "react";
import { Container, Grid } from "../../components";
import { WorkspaceRoutes } from "app/config";
import { Dashboard } from "workspace/modules/dashboard";
export function Workmain() {
	return (
		<Container.Workmain className="Container-workmain">
			<Grid.Workmain className="Grid-workmain">
				<WorkspaceRoutes />
				{/* <Dashboard /> */}

			</Grid.Workmain>
		</Container.Workmain>
	);
}
