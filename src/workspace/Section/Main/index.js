import React from "react";
import { WorkspaceContainer } from "../../Container";
import { Grid } from "../../Grids";
import { WorkspaceRoutes } from "app/config";
import { Dashboard } from "Dashboard";

export function WorkspaceSectionMain() {
	return (
		<WorkspaceContainer.WorkspaceMain className="Container-workmain">
			<Grid.WorkspaceMain className="Grid-workmain">
				<WorkspaceRoutes/>
			</Grid.WorkspaceMain>
		</WorkspaceContainer.WorkspaceMain>
	);
}
