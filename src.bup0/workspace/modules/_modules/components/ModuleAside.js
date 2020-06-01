import React from "react";
import { ModuleAsideStyled } from "../styles";
import { MenuGroupNav } from "workspace/modules/menugroups";

export const ModuleAside = props => {
	return (
		<ModuleAsideStyled id="">
			<MenuGroupNav />
		</ModuleAsideStyled>
	);
};
