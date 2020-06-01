import React from "react";
import { ModuleLeftStyled } from "../styles"
import { ModuleInfo } from "./ModuleInfo"
import { ModuleStepNavigation } from "./ModuleStepNavigation"
import { ModuleFormArea } from "./ModuleFormArea"
import { ModuleFormNavigation } from "./ModuleFormNavigation"

export const ModuleLeft = () => {
	return (
		<ModuleLeftStyled className="Module-left">
			<ModuleInfo />
			<ModuleStepNavigation />
			<ModuleFormArea />
			<ModuleFormNavigation />
		</ModuleLeftStyled>
	);
};
