import React from "react";
import {
	ThemeWorkspaceSidebar,
	FlexWorkspaceSidebar
} from "../../../../applayout";
import { Brand } from "./Brand";
import { NavOne } from "./NavOne";
import { NavSettings } from "./NavSettings";

export function Sidebar() {
	return (
		<aside className="Workspace-sidebar">
			<ThemeWorkspaceSidebar>
				<FlexWorkspaceSidebar>
					<section>
						<Brand />
						<NavOne />
					</section>
					<section>
						<NavSettings />
					</section>
				</FlexWorkspaceSidebar>
			</ThemeWorkspaceSidebar>
		</aside>
	);
}
