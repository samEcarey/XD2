import React, { useState } from "react";
import { IconClose } from "../assets";
import { WorkflowHeaderStyled } from "../styles";

export function WorkflowHeader() {
	
	return (
		<WorkflowHeaderStyled className="Workflow-header">
			<div className="Workflow-header-brand">
				{/* <span className="info-icon"><FaStar /></span>
				<div className="info-details">
					<h2>Customer Service</h2>
				</div> */}
			</div>
			<div className="Workflow-header-actions">
				<div className="button-group-action">
					<button className="button cancel">Cancel</button>
					<button className="button save">Save</button>
				</div>
				<span className="workflow-close">
					<IconClose />
				</span>
			</div>
			
		</WorkflowHeaderStyled>
	);
}
