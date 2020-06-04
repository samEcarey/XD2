import React, { useState } from "react";
import styled from "styled-components";
import { OverlayWorkflowsStyled } from "./styles";
import { IconClose} from "./assets";
import { OverlayWorkflowHeader, OverlayWorkflowInfo, OverlayWorkflowStepInfo, OverlayWorkflowStepForm } from "./components";

export function OverlayWorkflows({overlayWorkflow, SetOverlayWorkflow}) {

	const overlay = {
		hidden: { opacity: 0, height: "0px" },
		visible: { height: "100%", opacity: 1}
	};

	return (
		<OverlayWorkflowsStyled 
			className="Overlay-workflows"
			variants={overlay}
			initial={overlayWorkflow ? "visible" : "hidden"}
			animate={overlayWorkflow ? "visible" : "hidden"}
		>
			<div className="Overlay-workflows-inner">
				<OverlayWorkflowHeader SetOverlayWorkflow={SetOverlayWorkflow} />
				<OverlayWorkflowInfo />
				<OverlayWorkflowStepInfo />
				<OverlayWorkflowStepForm />
			</div>
		</OverlayWorkflowsStyled>
	);
}