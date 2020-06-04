import React from "react";
import { Flex } from "app/layout";
import { IconChevronLeft, IconChevronRight } from "../assets";
import { OverlayWorkflowStepInfoStyled } from "../styles";

export function OverlayWorkflowStepInfo() {
	return (
		<OverlayWorkflowStepInfoStyled className="Overlay-workflow-step-info">
			<div className="workflow-step-details">
				<h3>Applicant Information</h3>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatibus non eum itaque dignissimos cumque dipisicing elit. Voluptatibus non eum itaque dignissimos cumque.</p>
			</div>
			<div className="workflow-step-actions">
				<div className="button-group-step">
					<button className="button prev"><IconChevronLeft /> Prev</button>
					<button className="button next">Next <IconChevronRight /></button>
				</div>
			</div>
		</OverlayWorkflowStepInfoStyled>
	);
}
