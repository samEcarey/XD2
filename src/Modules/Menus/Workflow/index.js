import React, { useEffect, useState } from "react";
import { WorkflowsStyled } from "./styles";
import {
	WorkflowHeader,
	WorkflowInfo,
	WorkflowStepInfo,
	WorkflowStepForm
} from "./components";

import { ReviewManagerMain } from "./types";
import { useAppGlobalState } from "app/data";

export function ModuleMenuGroupWorkflow({
	workflows,
	overlayWorkflow,
	SetOverlayWorkflow,
	SetOverlayMenugroup
}) {
	const [state,dispatch] = useAppGlobalState();
	const [currentStep, SetCurrentStep] = useState(0);
const [renderedWorkflow,setRenderedWorflow]= useState(<div/>)
	const [currentWorflow, setCurrentWorkflow] = useState();

	useEffect(()=>{
		setCurrentWorkflow(workflows[currentStep])
	},[currentStep])

	useEffect(()=>{
		if(currentWorflow){
			if (
				currentWorflow.workflowid ==
				"A29DCE0A-838D-47D4-AE43-D14BD4AB5C5E"
			) {
				 setRenderedWorflow(<ReviewManagerMain />);
			}
		}
	},[currentWorflow])

	const overlay = {
		hidden: { display: "none" },
		visible: { display: "block" }
	};
	

	const Workflows = () => {
	
		
		return currentWorflow
	};
	
	return (
		<WorkflowsStyled
			className="Workflows-overlay"
			variants={overlay}
			initial={overlayWorkflow ? "visible" : "hidden"}
			animate={overlayWorkflow ? "visible" : "hidden"}
		>
			<div className="Workflows-inner">
				<WorkflowHeader
					SetOverlayWorkflow={SetOverlayWorkflow}
					SetOverlayMenugroup={SetOverlayMenugroup}
				/>
				<WorkflowInfo
					currentWorkflow={state.moduleMenuGroupWorkflows[currentStep]}
					SetCurrentStep={SetCurrentStep}
				/>
				{renderedWorkflow}
				{/**<WorkflowStepForm
					currentStep={currentStep}
					SetCurrentStep={SetCurrentStep}
				/> */}
			</div>
		</WorkflowsStyled>
	);
}
