import React from "react";
import { ModuleHeaderStyled } from "../styles";
import { ModuleAsideToggleButton } from "./ModuleAsideToggleButton"
import { Help } from "./Help"

export const ModuleHeader = props => {
	return (
		<ModuleHeaderStyled className="Module-header">
			<ModuleAsideToggleButton {...props} />
			
			<Help />
		</ModuleHeaderStyled>
	);
};
