import React from "react";
import { OverlayWorkflowStepFormStyled } from "../styles";
import { WorkflowStepNavbar } from "./WorkflowStepNavbar";
import { WorkflowFormArea } from "./WorkflowFormArea";

export function OverlayWorkflowStepForm(props) {
	return (
		<OverlayWorkflowStepFormStyled className="Overlay-workflow-step-form">
			<WorkflowStepNavbar {...props} />
			<WorkflowFormArea {...props} />
		</OverlayWorkflowStepFormStyled>
	);
}
