import React from "react";
import { FaQuestionCircle } from "react-icons/fa";

export const ModuleRight = () => {
	return (
		<aside className="Module-right">
			<section className="Workflow-menugroup">
				<div className="Workflow-menugrouptitle">
					<h4>
						<FaQuestionCircle />
						<span>Help Center</span>
					</h4>
				</div>
				<nav className="Workflow-menugroupitems">
					<ol className="Menus-workflowstepper">
						<li className="active">
							<label><span>01</span><input name="step-options" type="radio" value="0" checked="" />Applicant Information</label>
							<div className="step-content">
								<ul>
									<li>Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur</li>
									<li>Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur</li>
									<li>Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur</li>
								</ul>
							</div>
						</li>
						<li className="">
							<label><span>02</span><input name="step-options" type="radio" value="1" />Contact Information</label>
							<div class="step-content">
								<ul>
									<li>Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur</li>
									<li>Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur</li>
									<li>Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur</li>
								</ul>
							</div>
						</li>
						<li className="">
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
		</aside>
	);
};
