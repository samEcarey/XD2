import React from "react";

export const WorkflowFormStep3 = (props) => {
	if (props.currentStep !== 3) {
		return null
	} 
	return (
		<>
			<div className="Form-group">
				<label for="ssnumber">Social Security Number3</label>
				<input id="ssnumber" className="form-input" type="text" name="ssnumber" placeholder="---/ --/ ----" defaultValue="" />
			</div>
			<div className="Form-group">
				<label for="dateOfBirth">Date of Birth3</label>
				<input id="dateOfBirth" className="form-input-date" type="date" name="dateOfBirth" placeholder="MM/DD/YYYY" defaultValue="" />
			</div>
			<div className="Form-group">
				<label for="maritalstatus">Marital Status3</label>
				<input id="maritalstatus" className="form-input" type="text" name="maritalstatus" placeholder="Enter marital status" defaultValue="" />
			</div>
			
		</>
	);
};
