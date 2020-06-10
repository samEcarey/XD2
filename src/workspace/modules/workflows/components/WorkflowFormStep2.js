import React from "react";

export const WorkflowFormStep2 = (props) => {
	if (props.currentStep !== 2) {
		return null
	} 
	return (
		<>
				<div className="Form-group">
					<label for="firstName">First Name2</label>
					<input id="firstName" className="form-input" type="text" name="firstName" placeholder="Enter first name" defaultValue="Daniel" />
				</div>
				<div className="Form-group">
					<label for="middleName">Middle Name2</label>
					<input className="form-input" type="text" name="middleName" placeholder="Enter middle name" defaultValue="Ryan" />
				</div>
				<div className="Form-group">
					<label for="lastName">Last Name2</label>
					<input id="lastName" className="form-input" type="text" name="lastName" placeholder="Enter last name" defaultValue="90sdesigner" />
				</div>
			</>
	);
};
