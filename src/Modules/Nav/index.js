import React from "react";
import { ModulesNavStyled } from "Modules";
import { Flex } from "app/layout";
import { ModuleMenu } from "Modules"

export function ModuleMenuNav() {
	return (
		<ModulesNavStyled className="Workaside-modulesnav">
			<Flex.ColCenter>
				<ModuleMenu />
			</Flex.ColCenter>
		</ModulesNavStyled>
	);
}
