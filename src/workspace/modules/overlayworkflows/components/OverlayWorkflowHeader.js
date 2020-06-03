import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IconClose } from "../assets";
import { OverlayWorkflowHeaderStyled } from "../styles";

export function OverlayWorkflowHeader({ SetOverlayWorkflow }) {
	
	return (
		<OverlayWorkflowHeaderStyled className="Overlay-workflow-header">
			<div className="Workflow-header-brand">
				<span className="info-icon"><FaStar /></span>
				<div className="info-details">
					<h2>Customer Service</h2>
				</div>
			</div>
			<div className="Workflow-header-actions">
				<div className="button-group-action">
					<button className="button cancel">Cancel</button>
					<button className="button save">Save</button>
				</div>
				<span className="workflow-close" onClick={() => SetOverlayWorkflow(false)}>
					<IconClose />
				</span>
			</div>
			
		</OverlayWorkflowHeaderStyled>
	);
}
