import React from "react";
import { ActionsNavStyled } from "./styles";
import { Flex } from "app/layout";
import { DrawerLeftNav, DrawerAside, DrawerModuleMenus } from "./drawerleftnav";
import { HoverMaxIcon } from "app/packages";

export function ActionsNav() {
	return (
		<ActionsNavStyled className="Workheader-actionsnav">
			<Flex.RowBetween>
				<DrawerLeftNav>
					<Flex.Row>
						<DrawerAside />
						<DrawerModuleMenus />
					</Flex.Row>
				</DrawerLeftNav>
				<HoverMaxIcon />
			</Flex.RowBetween>
		</ActionsNavStyled>
	);
}
