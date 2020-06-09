import React from "react";
import { OverlayWorkflowInfoStyled } from "../styles";

/*
 * This is template for MenuGroups
 * BUT: This data comes from modules/menu
 */

export function OverlayWorkflowInfo() {
	return (
		<OverlayWorkflowInfoStyled className="Overlay-workflow-info">
			<h3>Create a new Employer</h3>
			<span className="datetime">9:00 am | June 1, 2020</span>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non eum itaque ipisicing elit dipisicing elit. </p>
			<div className="Workflow-info-actions">
				<div className="button-group-action">
					<button className="button cancel">Cancel</button>
					<button className="button save">Save</button>
				</div>
			</div>
		</OverlayWorkflowInfoStyled>
	);
}
