import React,{useEffect} from "react";
import { WorkspaceContainer } from "Workspace/Container";
import { Flex } from "app/layout";
import { ModuleMenuNav, UserActionsNav, UserLogOffNav } from "Modules";
import {useUser} from "app/data"

export function WorkspaceSectionAside() {
	
	return (
		<WorkspaceContainer.Workaside className="Container-workaside">
			<div className="Flexflow-workaside">
				<ModuleMenuNav />	
				<UserActionsNav />
				<UserLogOffNav />
			</div>
		</WorkspaceContainer.Workaside>
	);
}


