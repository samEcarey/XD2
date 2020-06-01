import React from "react";
import { Container, Grid } from "../components";
import { Workaside } from "./workaside";
import { Workmain } from "./workmain";

export function Worksection() {
	return (
		<Container.Worksection className="Container-worksection">
			<Grid.Worksection className="Grid-worksection">
				<Workaside />
				<Workmain />
			</Grid.Worksection>
		</Container.Worksection>
	);
}
