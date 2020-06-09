import React, { useState } from "react";
import { DashboardMainStyled } from "./styles";
import { DashboardLeft, DashboardRight } from "./components";

export const DashboardMain = () => {
	const [currentStep, SetCurrentStep] = useState(1)
	return (
		<DashboardMainStyled className="Dashboard-main">
			<DashboardLeft />
			<DashboardRight currentStep={currentStep} SetCurrentStep={SetCurrentStep}  />
		</DashboardMainStyled>
	);
};
