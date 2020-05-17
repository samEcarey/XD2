import React from "react";
import { ActionsNavStyled } from "./styles";
import { Flex } from "../../../../../appdesign";
import { DrawerLeftNav } from "./drawerleftnav";
import { WorkspaceMenu, ApplicatonsMenu } from "../../../../modules/menus";

import { HoverMaxIcon } from "./maxview/components/HoverMaxIcon";

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
