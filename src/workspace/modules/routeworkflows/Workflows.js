import React, { useState } from "react";
import { WorkflowsStyled } from "./styles";
import { WorkflowHeader, WorkflowInfo, WorkflowStepInfo, WorkflowStepForm } from "./components";

export function Workflows() {
	const [currentStep, SetCurrentStep] = useState(1)
	const overlay = {
		initial: {
			//opacity: 0, height: "0px",
		},
		in: {
			//height: "calc(100vh - 8rem)", opacity: 1,
		},
		out: {
			//opacity: 0, height: "0px",
		},
	};

	return (
		<WorkflowsStyled 
			className="Workflows-overlay"
			variants={overlay}
			initial="initial"
			animate="in"
			exit="out"
		>
			<div className="Workflows-inner">
				<WorkflowHeader />
				<WorkflowInfo />
				<WorkflowStepInfo currentStep={currentStep} SetCurrentStep={SetCurrentStep} />
				<WorkflowStepForm currentStep={currentStep} SetCurrentStep={SetCurrentStep} />
			</div>
		</WorkflowsStyled>
	);
}