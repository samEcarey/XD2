import React from "react";
import styled from "styled-components";
import { GridWorkspace } from "../applayout";
import { Sidebar as WorkspaceSidebar } from "./containers";
import { Workarea as WorkspaceWorkarea } from "./containers";

export function Website() {
	return (
		<section className="Workspace-screen">
			<GridWorkspace className="Workspace-grid">
				<WorkspaceSidebar />
				<WorkspaceWorkarea />
			</GridWorkspace>
		</section>
	);
}
