import React from "react";
import { WorkspaceContainer } from "../Container";
import { Grid } from "../Grids"
import { WorkspaceSectionAside } from "./Aside";
import { WorkspaceSectionMain } from "./Main";
export function WorkspaceSection() {
	return (
		<WorkspaceContainer.Worksection className="Container-worksection">
		
			<Grid.Worksection className="Grid-worksection">
				<WorkspaceSectionAside />
				<WorkspaceSectionMain />
			</Grid.Worksection>
		</WorkspaceContainer.Worksection>
	);
}

export * from "./Main"
export * from "./Aside"