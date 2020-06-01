import React from "react";
import { ModuleMainStyled } from "./styles";
import { ModuleLeft, ModuleRight } from "./components";

export const ModuleMain = () => {
	return (
		<ModuleMainStyled className="Module-main">
			<ModuleLeft />
			<ModuleRight />
		</ModuleMainStyled>
	);
};
