import React, { useState } from "react";
import { ModuleMainStyled } from "./styles";
import { ModuleLeft, ModuleRight } from "./components";

export const ModuleMain = () => {
	const [currentStep, SetCurrentStep] = useState(1)
	return (
		<ModuleMainStyled className="Module-main">
			<ModuleLeft currentStep={currentStep} SetCurrentStep={SetCurrentStep}  />
			<ModuleRight currentStep={currentStep} SetCurrentStep={SetCurrentStep}  />
		</ModuleMainStyled>
	);
};
