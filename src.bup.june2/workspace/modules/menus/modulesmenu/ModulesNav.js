import React from "react";
import { ModulesNavStyled } from "./styles";
import { Flex } from "app/layout";
import { ModulesMenu } from "workspace/modules";

export function ModulesNav() {
	return (
		<ModulesNavStyled className="Workaside-modulesnav">
			<Flex.ColCenter>
				<ModulesMenu />
			</Flex.ColCenter>
		</ModulesNavStyled>
	);
}
