import React from "react";
import { WorkflowStepFormStyled } from "../styles";
import { WorkflowStepNavbar } from "./WorkflowStepNavbar";
import { WorkflowFormArea } from "./WorkflowFormArea";

export function WorkflowStepForm(props) {
	return (
		<WorkflowStepFormStyled className="Workflow-step-form">
			<WorkflowStepNavbar {...props} />
			<WorkflowFormArea {...props} />
		</WorkflowStepFormStyled>
	);
}
