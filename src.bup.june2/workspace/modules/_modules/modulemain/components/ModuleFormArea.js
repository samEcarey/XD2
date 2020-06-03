import React from "react";
import { ModuleFormAreaStyled } from "../styles";
import { IconChevronLeft, IconChevronRight } from "../assets"
import { ModuleFormStep1 } from "./ModuleFormStep1"
import { ModuleFormStep2 } from "./ModuleFormStep2"
import { ModuleFormStep3 } from "./ModuleFormStep3"


export const ModuleFormArea = (props) => {
	return (
		<ModuleFormAreaStyled className="Module-form-area">
			<form name="" className="Module-form">
				<ModuleFormStep1 {...props} />
				<ModuleFormStep2 {...props} />
				<ModuleFormStep3 {...props} />
			</form>
		</ModuleFormAreaStyled>
	);
};
