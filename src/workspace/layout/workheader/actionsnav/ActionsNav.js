import React from "react";
import { ActionsNavStyled } from "./styles";
import { Flex } from "app/layout";
import { DrawerLeftNav } from "./drawerleftnav";
import { WorkspaceMenu, ApplicatonsMenu } from "workspace/modules/menus";

import { HoverMaxIcon } from "app/packages";

export function ActionsNav() {
	return (
		<ActionsNavStyled className="Workheader-actionsnav">
			<Flex.RowEnd>
				<DrawerLeftNav>
					<WorkspaceMenu />
					<ApplicatonsMenu />
				</DrawerLeftNav>
				<HoverMaxIcon />
			</Flex.RowEnd>
		</ActionsNavStyled>
	);
}
