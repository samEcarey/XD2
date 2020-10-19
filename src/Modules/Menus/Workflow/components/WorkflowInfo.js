import React from "react";
import { WorkflowInfoStyled } from "../styles";

/*
 * This is template for MenuGroups
 * BUT: This data comes from modules/menu
 */

export function WorkflowInfo(currentWorkflow) {
	//console.log(currentWorkflow)
	return (
		<WorkflowInfoStyled className="Workflow-info">
			<h3>{currentWorkflow.friendlyname}</h3>
			<span className="datetime">{currentWorkflow.description}</span>
			<div className="Workflow-info-actions">
				<div className="button-group-action">
					<button className="button cancel">Cancel</button>
					<button className="button save">Save</button>
				</div>
			</div>
		</WorkflowInfoStyled>
	);
}
