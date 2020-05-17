import React from "react";
import { WorkHeader } from "./workheader";
import { WorkSection } from "./worksection";
import { WorkAside } from "./workaside";
import { WorkMain } from "./workmain";

export function WorkspaceLayout({ children }) {
	return (
		<section className="Workspace-Layout">
			<WorkHeader />
			<WorkSection>
				<WorkAside />
				<WorkMain>{children}</WorkMain>
			</WorkSection>
		</section>
	);
}
