import React from "react";
import { Container, Grid } from "../components";
import { Workaside } from "../workaside";
import { Workmain } from "../workmain";

export function Worksection() {
	return (
		<Grid.Worksection className="Grid-worksection">
			<Container>
				<Workaside />
			</Container>
			<Container>
				<Workmain />
			</Container>
		</Grid.Worksection>
	);
}
