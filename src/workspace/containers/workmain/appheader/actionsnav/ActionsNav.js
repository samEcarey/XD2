import React from "react";
import { ActionsNavStyled } from "./styles";
import { Flex } from "app/layout";
import { DrawerLeftNav } from "./drawerleftnav";
import { WorkspaceMenu, ApplicatonsMenu } from "workspace/modules/menus";

import { HoverMaxIcon } from "app/packages";

export function ActionsNav() {
	return (
		<ActionsNavStyled className="Appheader-actionsnav">
			<DrawerLeftNav>
				<WorkspaceMenu />
				<ApplicatonsMenu />
			</DrawerLeftNav>
			<HoverMaxIcon />
		</ActionsNavStyled>
	);
}
