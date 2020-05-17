import React from "react";
import { Grid, Container } from "../../../../appdesign";
import { AppHeaderStyled } from "./AppHeader.styles";
import { Branding } from "./branding";
import { AgencySearch } from "./agencysearch";
import { ActionsNav } from "./actionsnav";

export function AppHeader() {
	return (
		<Container.AppHeader>
			<Grid.AppHeader>
				{/* <Flex.RowBetween> */}
				<Branding />
				<AgencySearch />
				<ActionsNav />
				{/* </Flex.RowBetween> */}
			</Grid.AppHeader>
		</Container.AppHeader>
	);
}
