import React from "react";
import { WorkflowFormAreaStyled } from "../styles";
import { WorkflowFormStep1 } from "./WorkflowFormStep1";
import { WorkflowFormStep2 } from "./WorkflowFormStep2";
import { WorkflowFormStep3 } from "./WorkflowFormStep3";

export const WorkflowFormArea = (props) => {
	return (
		<WorkflowFormAreaStyled className="Workflow-form-area">
			<form name="" className="Workflow-form">
				<WorkflowFormStep1 {...props} />
				<WorkflowFormStep2 {...props} />
				<WorkflowFormStep3 {...props} />
			</form>
		</WorkflowFormAreaStyled>
	);
};
