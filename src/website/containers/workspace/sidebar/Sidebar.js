import React from "react";
import {
	ThemeWorkspaceSidebar,
	FlexWorkspaceSidebar,
	DrawerLeftDesktop,
	DrawerPushRight
} from "../../../../applayout";
import { Brand } from "./Brand";
import { NavOne } from "./NavOne";
import { NavSettings } from "./NavSettings";
import { AppsMenu } from "../../../menus";

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
						<DrawerLeftDesktop>
							<AppsMenu />
						</DrawerLeftDesktop>
					</section>
					<section>
						<DrawerPushRight>
							<AppsMenu />
						</DrawerPushRight>
					</section>
					<section>
						<NavSettings />
					</section>
				</FlexWorkspaceSidebar>
			</ThemeWorkspaceSidebar>
		</aside>
	);
}
