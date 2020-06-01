import React from "react";
import { Container, Grid } from "../../components";
import { Modules } from "../../../modules/_modules";
export function Workmain() {
	return (
		<Container.Workmain className="Container-workmain">
			<Grid.Workmain className="Grid-workmain">
				<Modules />
			</Grid.Workmain>
		</Container.Workmain>
	);
}
