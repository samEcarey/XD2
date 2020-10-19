import React from "react";
import { IconChevronLeft, IconChevronRight } from "../assets";
import { WorkflowStepInfoStyled } from "../styles";

export function WorkflowStepInfo({ currentStep, SetCurrentStep }) {
	return (
		<WorkflowStepInfoStyled className="Workflow-step-info">
			<div className="workflow-step-details">
				<h3>Applicant Information</h3>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatibus non eum itaque dignissimos cumque dipisicing elit. Voluptatibus non eum itaque dignissimos cumque.</p>
			</div>
			<div className="workflow-step-actions">
				<div className="button-group-step">
					<button className="button prev" onClick={()=>SetCurrentStep(currentStep - 1)} disabled={currentStep === 1 ? true : false}><IconChevronLeft /> Prev</button>
					<button className="button next" onClick={()=>SetCurrentStep(currentStep + 1)} disabled={currentStep === 3 ? true : false}>Next <IconChevronRight /></button>
				</div>
			</div>
		</WorkflowStepInfoStyled>
	);
}
