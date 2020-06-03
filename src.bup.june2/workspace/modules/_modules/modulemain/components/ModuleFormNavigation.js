import React from "react";
import { ModuleFormNavigationStyled } from "../styles"
import { IconChevronLeft, IconChevronRight } from "../assets"

export const ModuleFormNavigation = ({ currentStep, SetCurrentStep }) => {
	return (
		<ModuleFormNavigationStyled className="Module-form-navigation">
			<div className="button-group-step">
				<button className="button prev" onClick={()=>SetCurrentStep(currentStep - 1)} disabled={currentStep === 1 ? true : false}><IconChevronLeft /> Prev</button>
				<button className="button next" onClick={()=>SetCurrentStep(currentStep + 1)} disabled={currentStep === 3 ? true : false}>Next <IconChevronRight /></button>
			</div>
		</ModuleFormNavigationStyled>
	);
};
