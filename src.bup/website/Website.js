import React from "react";
import { GridWorkspace } from "../applayout";
import { Sidebar as WorkspaceSidebar } from "./containers";
import { Workarea as WorkspaceWorkarea } from "./containers";
import { MaximizableView } from "../appsystem";

export function Website() {
	return (
		<MaximizableView backgroundColor="red">
			<section className="Workspace-screen">
				<GridWorkspace className="Workspace-grid">
					<WorkspaceSidebar />
					<WorkspaceWorkarea />
				</GridWorkspace>
			</section>
		</MaximizableView>
	);
}
