import React from "react";
import { Container, Grid } from "../components";
import { Branding } from "./branding";
import { UserWelcome } from "./userwelcome"; 
import { AgencySearch } from "./agencysearch";
import { ActionsNav } from "./actionsnav";

export function Workheader() {
	return (
		<Container.Workheader className="Container-workheader">
			<Grid.Workheader className="Grid-workheader">
				<Branding />
				<UserWelcome />
				<AgencySearch />
				<ActionsNav />
			</Grid.Workheader>
		</Container.Workheader>
	);
}
