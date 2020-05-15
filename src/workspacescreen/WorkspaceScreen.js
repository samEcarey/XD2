import React from "react";
import { classes } from "classnames";
import { Grid, Flex, Container } from "../appdesign";
import { Workaside, Workmain } from "./containers";
// import { MaximizableView } from "./containers/workmain/appheader/actionsnav/maxview/MaximizableView";

export const WorkspaceScreen = () => {
	return (
		// <MaximizableView>
		<Grid.Workspace>
			<Container.Workaside className="Container-workaside">
				<Workaside />
			</Container.Workaside>
			<Container.Workmain className="Container-workmain">
				<Workmain />
			</Container.Workmain>
		</Grid.Workspace>
		// </MaximizableView>
	);
};
