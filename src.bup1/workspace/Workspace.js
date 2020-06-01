import React from "react";
import { MaximizableView } from "app/packages";
import { Container, Grid } from "./layout";
import { Workheader, Worksection } from "./layout";

export const Workspace = () => {
	return (
		<MaximizableView>
			<Container.Workspace>
				<Grid.Workspace className="Grid-workspace">
					<Workheader />
					<Worksection />
				</Grid.Workspace>
			</Container.Workspace>
		</MaximizableView>
	);
};
