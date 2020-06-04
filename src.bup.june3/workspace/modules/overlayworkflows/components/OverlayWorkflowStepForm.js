import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconAngleDoubleRight, IconAdd } from "../assets";
import { OverlayWorkflowStepFormStyled } from "../styles";
import { WorkflowFormArea } from "./WorkflowFormArea";

export function OverlayWorkflowStepForm(props) {
	
	return (
		<OverlayWorkflowStepFormStyled className="Overlay-workflow-step-form">
			<nav className="step-navbar">
				<ol>
					<li className="active">
						<label><span>01</span><input name="step-options" type="radio" value="0" checked="" />Applicant Information</label>
					</li>
					<li>
						<label><span>02</span><input name="step-options" type="radio" value="1" />Contact Information</label>
					</li>
					<li>
						<label><span>03</span><input name="step-options" type="radio" value="2" />Personal Information</label>
					</li>
				</ol>
			</nav>

			<WorkflowFormArea />


		</OverlayWorkflowStepFormStyled>
	);
}
