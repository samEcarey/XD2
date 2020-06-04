import React from "react";
import { ModuleAsideStyled } from "./styles";
import { MenuGroupNav } from "../menugroupspanel";

export const ModuleAside = props => {
	return (
		<ModuleAsideStyled className="Module-aside">
			<MenuGroupNav />
		</ModuleAsideStyled>
	);
};
