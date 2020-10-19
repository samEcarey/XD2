import React, { useEffect, useState } from "react";
import { MaximizableView } from "app/packages";
import { WorkspaceContainer } from "./Container";
import { Grid } from "./Grids";
import { WorkspaceHeader } from "./Header";
import { WorkspaceSection } from "./Section";
import { useUser, useAuth, useAppGlobalState } from "app/data";

export const Workspace = () => {
	const user = useUser();
	const auth = useAuth();
	const [state, dispatch] = useAppGlobalState();

	useEffect(() => {
		
		async function initalLoadUserContext(){
			if(auth.authState)
			 await user.getUserContext();
		}
		initalLoadUserContext().then(()=>{
			
		});
			
		
				
	},[auth.authState]);

	useEffect(() => {
		
	
		
				
	},[auth.authState]);

	

	return (
		<MaximizableView>
			
			<WorkspaceContainer.Workspace>
				<Grid.Workspace className="Grid-workspace">
					<WorkspaceHeader />
					<WorkspaceSection />
				</Grid.Workspace>
			</WorkspaceContainer.Workspace>
		</MaximizableView>
	);
};
