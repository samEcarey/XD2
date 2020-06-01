import React from "react";
import { ApplicationsNavStyled } from "./styles";
import { Flex } from "app/layout";
import { ApplicatonsMenu } from "workspace/modules/menus";

export function ApplicationsNav() {
	return (
		<ApplicationsNavStyled>
			<Flex.ColCenter>
				<ApplicatonsMenu />
			</Flex.ColCenter>
		</ApplicationsNavStyled>
	);
}
