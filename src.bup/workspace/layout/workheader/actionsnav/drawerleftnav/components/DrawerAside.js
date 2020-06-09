import React from "react";
import { DrawerAsideStyled } from "../styles";
import { ModulesNav, UserActionsNav } from "workspace/modules";

export function DrawerAside() {
	return (
		<DrawerAsideStyled className="Drawer-aside">
			<ModulesNav />
			<UserActionsNav />
		</DrawerAsideStyled>
	);
}
