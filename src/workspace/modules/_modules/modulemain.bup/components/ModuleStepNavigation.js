import React from "react";
import { ModuleStepNavigationStyled } from "../styles"

export const ModuleStepNavigation = () => {
	return (
		<ModuleStepNavigationStyled className="Module-step-navigation">
			<nav className="step-navbar">
				<ol>
					<li className="active">
						<label><span>01</span><input name="step-options" type="radio" value="0" checked="" />Applicant Information</label>
					</li>
					<li className="">
						<label><span>02</span><input name="step-options" type="radio" value="1" />Contact Information</label>
					</li>
					<li className="">
						<label><span>03</span><input name="step-options" type="radio" value="2" />Personal Information</label>
					</li>
				</ol>
			</nav>
		</ModuleStepNavigationStyled>
	);
};
