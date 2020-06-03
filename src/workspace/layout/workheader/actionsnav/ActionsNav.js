import React from "react";
import { ActionsNavStyled } from "./styles";
import { Flex } from "app/layout";
import { DrawerLeftNav, DrawerAside, DrawerModuleMenus } from "./drawerleftnav";
import { HoverMaxIcon } from "app/packages";
import { HeaderActions } from "./headeractions";

export function ActionsNav() {
	return (
		<ActionsNavStyled className="Workheader-actionsnav">
			<Flex.RowEnd>
				<DrawerLeftNav>
					<Flex.Row>
						<DrawerAside />
						<DrawerModuleMenus />
					</Flex.Row>
				</DrawerLeftNav>
				<HeaderActions />
				<HoverMaxIcon />
			</Flex.RowEnd>
		</ActionsNavStyled>
	);
}
