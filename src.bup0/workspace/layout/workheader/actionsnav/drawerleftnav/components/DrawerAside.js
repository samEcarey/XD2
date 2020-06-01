import React from "react";
import { DrawerAsideStyled } from "../styles";
import { ModulesNav, ApplicationsNav, UserActionsNav } from "workspace/modules";

export function DrawerAside() {
	return (
		<DrawerAsideStyled className="Drawer-aside">
			<ModulesNav />
			<ApplicationsNav />
			<UserActionsNav />
		</DrawerAsideStyled>
	);
}
