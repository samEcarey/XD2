import React, { useState } from "react";
import { OverlayWorkflowsStyled } from "./styles";
import { OverlayWorkflowHeader, OverlayWorkflowInfo, OverlayWorkflowStepInfo, OverlayWorkflowStepForm } from "./components";

export function OverlayWorkflows({overlayWorkflow, SetOverlayWorkflow, SetOverlayMenugroup}) {
	const [currentStep, SetCurrentStep] = useState(1)
	const overlay = {
		hidden: { display: "none" },
		visible: { display: "block" }
	};

	return (
		<OverlayWorkflowsStyled 
			className="Overlay-workflows"
			variants={overlay}
			initial={overlayWorkflow ? "visible" : "hidden"}
			animate={overlayWorkflow ? "visible" : "hidden"}
		>
			<div className="Overlay-workflows-inner">
				<OverlayWorkflowHeader SetOverlayWorkflow={SetOverlayWorkflow} SetOverlayMenugroup={SetOverlayMenugroup} />
				<OverlayWorkflowInfo />
				<OverlayWorkflowStepInfo currentStep={currentStep} SetCurrentStep={SetCurrentStep} />
				<OverlayWorkflowStepForm currentStep={currentStep} SetCurrentStep={SetCurrentStep} />
			</div>
		</OverlayWorkflowsStyled>
	);
}