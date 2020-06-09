import React from "react";
import { ModuleStepNavigationStyled } from "../styles"

export const ModuleStepNavigation = ({ currentStep, SetCurrentStep }) => {
	return (
		<ModuleStepNavigationStyled className="Module-step-navigation">
			<nav className="step-navbar">
				<ol>
					<li className={currentStep === 1 ? "active" : null} onClick={()=>SetCurrentStep(1)}>
						<label><span>01</span><input name="step-options" type="radio" value="0" checked="" />Applicant Information</label>
					</li>
					<li className={currentStep === 2 ? "active" : null} onClick={()=>SetCurrentStep(2)}>
						<label><span>02</span><input name="step-options" type="radio" value="1" />Contact Information</label>
					</li>
					<li className={currentStep === 3 ? "active" : null} onClick={()=>SetCurrentStep(3)}>
						<label><span>03</span><input name="step-options" type="radio" value="2" />Personal Information</label>
					</li>
				</ol>
			</nav>
		</ModuleStepNavigationStyled>
	);
};
