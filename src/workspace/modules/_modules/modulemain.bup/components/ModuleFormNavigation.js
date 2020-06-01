import React from "react";
import { ModuleFormNavigationStyled } from "../styles"
import { IconChevronLeft, IconChevronRight } from "../assets"

export const ModuleFormNavigation = () => {
	return (
		<ModuleFormNavigationStyled className="Module-form-navigation">
			<div className="button-group-step">
				<button className="button prev"><IconChevronLeft /> Prev</button>
				<button className="button next">Next <IconChevronRight /></button>
			</div>
		</ModuleFormNavigationStyled>
	);
};
