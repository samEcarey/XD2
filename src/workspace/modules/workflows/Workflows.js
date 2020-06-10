import React, { useState } from "react";
import { WorkflowsStyled } from "./styles";
import { WorkflowHeader, WorkflowInfo, WorkflowStepInfo, WorkflowStepForm } from "./components";

export function Workflows({overlayWorkflow, SetOverlayWorkflow, SetOverlayMenugroup}) {
	const [currentStep, SetCurrentStep] = useState(1)
	const overlay = {
		hidden: { display: "none" },
		visible: { display: "block" }
	};

	return (
		<WorkflowsStyled 
			className="Workflows-overlay"
			variants={overlay}
			initial={overlayWorkflow ? "visible" : "hidden"}
			animate={overlayWorkflow ? "visible" : "hidden"}
		>
			<div className="Workflows-inner">
				<WorkflowHeader SetOverlayWorkflow={SetOverlayWorkflow} SetOverlayMenugroup={SetOverlayMenugroup} />
				<WorkflowInfo />
				<WorkflowStepInfo currentStep={currentStep} SetCurrentStep={SetCurrentStep} />
				<WorkflowStepForm currentStep={currentStep} SetCurrentStep={SetCurrentStep} />
			</div>
		</WorkflowsStyled>
	);
}