import React from "react";
import { WorkspaceContainer } from "../Container";
import { Grid } from "../Grids";
import { WorkspaceHeaderBranding } from "./Branding";
import { WorkspaceHeaderUserWelcome } from "./UserWelcome";
import { HeaderNavAgencySearch } from "./Nav/AgencySearch";
import { WorkspaceHeaderNav } from "./Nav";

export function WorkspaceHeader() {
	return (
		<WorkspaceContainer.Workheader className="Container-workheader">
			<Grid.Workheader className="Grid-workheader">
				<WorkspaceHeaderBranding />
				<WorkspaceHeaderUserWelcome />
				<HeaderNavAgencySearch />
				<WorkspaceHeaderNav />
			</Grid.Workheader>
		</WorkspaceContainer.Workheader>
	);
}
