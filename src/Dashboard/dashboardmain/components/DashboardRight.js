import React from "react";
import { DashboardRightStyled } from "../styles";
import { IconRefresh } from "../assets";

export const DashboardRight = ({ currentStep, SetCurrentStep }) => {
	return (
		<DashboardRightStyled className="Dashboard-right">
			
			<section className="Workflow-menugroup">
				<div className="Workflow-menugrouptitle">
					<h4>
						<IconRefresh />
						<span>Workflow History</span>
					</h4>
				</div>
				
				<nav className="Workflow-menugroupitems">
					<ol className="Menus-workflowstepper">
						<li className={currentStep === 1 ? "active" : null} onClick={()=>SetCurrentStep(1)}>
							<label><span>01</span><input name="step-options" type="radio" value="0" checked="" />XD Workflows</label>
							<div className="step-content">
								<ul>
									{/*<li>Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur</li>
									<li>Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur</li>
									<li>Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur</li>*/}
								</ul>
							</div>
						</li>
						<li className={currentStep === 2 ? "active" : null} onClick={()=>SetCurrentStep(2)}>
							<label><span>02</span><input name="step-options" type="radio" value="1" />OD Workflows</label>
							<div class="step-content">
								<ul>
								{/*<li>Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur</li>
									<li>Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur</li>
									<li>Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur</li>*/}
								</ul>
							</div>
						</li>
						<li className={currentStep === 3 ? "active" : null} onClick={()=>SetCurrentStep(3)}>
							<label><span>03</span><input name="step-options" type="radio" value="2" />Misc Workflows</label>
							<div class="step-content">
								<ul>
									{/*<li>Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur</li>
									<li>Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur</li>
									<li>Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur</li>*/}
								</ul>
							</div>
						</li>
					</ol>
				</nav>
			</section>	
		</DashboardRightStyled>
	);
};
