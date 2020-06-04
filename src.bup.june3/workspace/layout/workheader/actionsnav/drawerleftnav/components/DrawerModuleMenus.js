import React from "react";
import { DrawerModuleMenusStyled } from "../styles";
import { MenuGroupNav } from "workspace/modules/menugroups";

export function DrawerModuleMenus() {
	return (
		<DrawerModuleMenusStyled className="Drawer-modulemenus">
			<MenuGroupNav />
		</DrawerModuleMenusStyled>
	);
}
