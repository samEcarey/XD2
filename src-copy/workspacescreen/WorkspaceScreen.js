import React from "react";
import { Grid, Container } from "appdesign";
import { Workaside, Workmain } from "./containers";
import { MaximizableView } from "./containers/workmain/appheader/actionsnav/maxview/MaximizableView";
import { GlobalStateProvider } from "./containers/workmain/appheader/actionsnav/maxview/context/useGlobalStateFunc";

export const WorkspaceScreen = () => {
	return (
		<GlobalStateProvider>
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
		</GlobalStateProvider>
	);
};
