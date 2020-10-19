import React from "react";
import { DrawerAsideStyled } from "../styles";
import { ModuleMenuNav, UserActionsNav } from "Modules";

export function DrawerAside() {
	return (
		<DrawerAsideStyled className="Drawer-aside">
			<ModuleMenuNav />
			<UserActionsNav />
		</DrawerAsideStyled>
	);
}
