import React from "react";
import { Container, Grid } from "../components";
import { Branding } from "./branding";
import { AgencySearch } from "./agencysearch";
import { ActionsNav } from "./actionsnav";

export function Workheader() {
	return (
		<Container.Workheader className="Workspace-header">
			<Grid.Workheader className="Grid-workheader">
				<Branding />
				<AgencySearch />
				<ActionsNav />
			</Grid.Workheader>
		</Container.Workheader>
	);
}
