import React from "react";
import { ModuleFormAreaStyled } from "../styles";
import { IconChevronLeft, IconChevronRight } from "../assets"

export const ModuleFormStep1 = (props) => {

	if (props.currentStep !== 1) {
		return null
	} 
	return (
		<>
				<div className="Form-group">
					<label for="firstName">First Name</label>
					<input id="firstName" className="form-input" type="text" name="firstName" placeholder="Enter first name" defaultValue="Daniel" />
				</div>
				<div className="Form-group">
					<label for="middleName">Middle Name</label>
					<input className="form-input" type="text" name="middleName" placeholder="Enter middle name" defaultValue="Ryan" />
				</div>
				<div className="Form-group">
					<label for="lastName">Last Name</label>
					<input id="lastName" className="form-input" type="text" name="lastName" placeholder="Enter last name" defaultValue="90sdesigner" />
				</div>
				<div className="Form-group">
					<label for="ssnumber">Social Security Number</label>
					<input id="ssnumber" className="form-input" type="text" name="ssnumber" placeholder="---/ --/ ----" defaultValue="" />
				</div>
				<div className="Form-group">
					<label for="dateOfBirth">Date of Birth</label>
					<input id="dateOfBirth" className="form-input-date" type="date" name="dateOfBirth" placeholder="MM/DD/YYYY" defaultValue="" />
				</div>
				<div className="Form-group">
					<label for="maritalstatus">Marital Status</label>
					<input id="maritalstatus" className="form-input" type="text" name="maritalstatus" placeholder="Enter marital status" defaultValue="" />
				</div>
				<div className="Form-group">
					<label for="maidenname">Maiden Name</label>
					<input id="maidenname" className="form-input" type="text" name="maidenname" placeholder="Enter maiden name" defaultValue="" />
				</div>
				<div className="Form-group">
				</div>
				<div className="Form-group">
					<label>Lorem ipsum dolor sit amet consectetur <br/> dolor sit amet consectetur</label>
					<div className="form-group-checkbox">
						<label>Answer one
							<input type="checkbox" className="form-input-checkbox" />
							<span class="checkmark"></span>
						</label>
					
						<label>Answer two
							<input type="checkbox" className="form-input-checkbox" />
							<span class="checkmark"></span>
						</label>
					
						<label>Answer three
							<input type="checkbox" className="form-input-checkbox" />
							<span class="checkmark"></span>
						</label>
					
						<label>Answer four
							<input type="checkbox" className="form-input-checkbox" />
							<span class="checkmark"></span>
						</label>
					</div>
				</div>
				<div className="Form-group">
					<label>Lorem ipsum dolor sit amet consectetur <br/> dolor sit amet consectetur</label>
					<div className="form-group-radio horizontal">
						<label>18-29
							<input type="radio" name="age" className="form-input-radio" />
							<span class="checkmark"></span>
						</label>
					
						<label>30-39
							<input type="radio" name="age" className="form-input-radio" />
							<span class="checkmark"></span>
						</label>
					
						<label>40-49
							<input type="radio" name="age" className="form-input-radio" />
							<span class="checkmark"></span>
						</label>
					
						<label>50-59
							<input type="radio" name="age" className="form-input-radio" />
							<span class="checkmark"></span>
						</label>
					</div>
				</div>
			</>
	);
};
