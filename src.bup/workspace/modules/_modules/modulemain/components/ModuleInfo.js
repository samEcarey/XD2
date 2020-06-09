import React from "react";
import { FaStar } from "react-icons/fa";
import { ModuleInfoStyled } from "../styles"
import { IconChevronLeft, IconChevronRight } from "../assets"

export const ModuleInfo = ({SetCurrentStep, currentStep}) => {
	return (
		<ModuleInfoStyled className="Module-info">
			<div className="Module-info-details">
				<span className="info-icon"><FaStar /></span>
				<div className="info-details">
					<h3>Applicant Information</h3>
					<p>Create employement ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit iaculis sollicitudin. Maecenas nibh odio, molestie sit amet finibus sit amet, semper ac tortor.</p>
				</div>
			</div>
			<div className="Module-info-actions">
				<div className="button-group-action">
					<button className="button cancel">Cancel</button>
					<button className="button save">Save</button>
				</div>
				<div className="button-group-step">
					<button className="button prev" onClick={()=>SetCurrentStep(currentStep - 1)} disabled={currentStep === 1 ? true : false}><IconChevronLeft /> Prev</button>
					<button className="button next" onClick={()=>SetCurrentStep(currentStep + 1)} disabled={currentStep === 3 ? true : false}>Next <IconChevronRight /></button>
				</div>
			</div>
		</ModuleInfoStyled>
	);
};
