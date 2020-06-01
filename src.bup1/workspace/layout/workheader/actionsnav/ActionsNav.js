import React from "react";
import { ActionsNavStyled } from "./styles";
import { Flex } from "app/layout";
import { DrawerLeftNav, DrawerAside, DrawerModuleMenus } from "./drawerleftnav";
import { UserWelcome } from "./userwelcome"
import { HoverMaxIcon } from "app/packages";

export function ActionsNav() {
	return (
		<ActionsNavStyled className="Workheader-actionsnav">
			<Flex.RowEnd>
				<UserWelcome />
				<DrawerLeftNav>
					<Flex.Row>
						<DrawerAside />
						<DrawerModuleMenus />
					</Flex.Row>
				</DrawerLeftNav>
				<HoverMaxIcon />
			</Flex.RowEnd>
		</ActionsNavStyled>
	);
}
