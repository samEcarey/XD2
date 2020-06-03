import React from "react";
import { ModuleRightStyled } from "../styles";
import { FaQuestionCircle } from "react-icons/fa";

export const ModuleRight = ({ currentStep, SetCurrentStep }) => {
	return (
		<ModuleRightStyled className="Module-right">
			<section className="Workflow-menugroup">
				<div className="Workflow-menugrouptitle">
					<h4>
						<FaQuestionCircle />
						<span>Help Center</span>
					</h4>
				</div>
				<nav className="Workflow-menugroupitems">
					<ol className="Menus-workflowstepper">
						<li className={currentStep === 1 ? "active" : null} onClick={()=>SetCurrentStep(1)}>
							<label><span>01</span><input name="step-options" type="radio" value="0" checked="" />Applicant Information</label>
							<div className="step-content">
								<ul>
									<li>Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur</li>
									<li>Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur</li>
									<li>Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur</li>
								</ul>
							</div>
						</li>
						<li className={currentStep === 2 ? "active" : null} onClick={()=>SetCurrentStep(2)}>
							<label><span>02</span><input name="step-options" type="radio" value="1" />Contact Information</label>
							<div class="step-content">
								<ul>
									<li>Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur</li>
									<li>Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur</li>
									<li>Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur</li>
								</ul>
							</div>
						</li>
						<li className={currentStep === 3 ? "active" : null} onClick={()=>SetCurrentStep(3)}>
							<label><span>03</span><input name="step-options" type="radio" value="2" />Personal Information</label>
							<div class="step-content">
								<ul>
									<li>Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur</li>
									<li>Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur</li>
									<li>Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur</li>
								</ul>
							</div>
						</li>
					</ol>
				</nav>
			</section>	
		</ModuleRightStyled>
	);
};
