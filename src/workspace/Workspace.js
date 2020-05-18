import React from "react";
import { Grid, Container } from "app/layout";
import { Workaside, Workmain } from "./containers";
import { MaximizableView } from "app/packages";

export const Workspace = () => {
	return (
		<MaximizableView>
			<Grid.Workspace>
				<Container.Workaside className="Container-workaside">
					<Workaside />
				</Container.Workaside>
				<Container.Workmain className="Container-workmain">
					<Workmain />
				</Container.Workmain>
			</Grid.Workspace>
		</MaximizableView>
	);
};
