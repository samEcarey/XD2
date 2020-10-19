import React from "react";
import { ActionsNavStyled } from "../styles";
import { Flex, Container } from "app/layout";
import { DrawerLeftNav, DrawerAside, DrawerModuleMenus } from "./DrawerLeft";
import { HoverMaxIcon } from "app/packages";
import { HeaderNavActions } from "./Actions";

export function WorkspaceHeaderNav() {
	return (
		<ActionsNavStyled className="Workheader-actionsnav">
			<Flex.RowEnd>
				<DrawerLeftNav>
					<Flex.Row>
						<DrawerAside />
						<DrawerModuleMenus />
					</Flex.Row>
				</DrawerLeftNav>
				<HeaderNavActions />
				<HoverMaxIcon />
			</Flex.RowEnd>
		</ActionsNavStyled>
	);
}

