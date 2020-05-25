import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Fieldset, Legend, FieldGroup, Label } from "app/common";
import { RegisterStep1 } from "./RegisterStep1";
import { RegisterStep2 } from "./RegisterStep2";

export function Register() {
	const [isNextStep, setIsNextStep] = useState(false);

	const handleNextStep = e => {
		e.preventDefault();
		setIsNextStep(true);
	};

	const handlePrevStep = e => {
		e.preventDefault();
		setIsNextStep(false);
	};

	return (
		<Form>
			<Fieldset>
				<Legend>Register an account</Legend>

				{isNextStep === false ? <RegisterStep1 /> : <RegisterStep2 />}

				<FieldGroup>
					{isNextStep === true ? (
						<button onClick={e => handlePrevStep(e)}>Previous</button>
					) : (
						<button onClick={e => handleNextStep(e)}>Next</button>
					)}
				</FieldGroup>

				<FieldGroup>
					<Link to="/workspace">
						{isNextStep === true ? (
							<button>Register</button>
						) : (
							<button disabled>Register</button>
						)}
					</Link>
				</FieldGroup>
			</Fieldset>
		</Form>
	);
}
