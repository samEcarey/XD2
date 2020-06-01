import React from "react";
import { ModuleHeaderStyled } from "./styles";
import { ModuleAsideToggleButton, Help, ModuleHeaderTitle  } from "./components"

export const ModuleHeader = props => {
	return (
		<ModuleHeaderStyled className="Module-header">
			<ModuleAsideToggleButton {...props} />
			<ModuleHeaderTitle />
			<Help />
		</ModuleHeaderStyled>
	);
};
