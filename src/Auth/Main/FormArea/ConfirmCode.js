import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Fieldset, Legend, FieldGroup, Label } from "app/common";
import { useAuth, submit } from "app/data";
import ReactCodeInput from "react-verification-code-input";
import { getPasswordRequirements } from "app/data"
import { StyledMessageArea } from "../../styles";

export function ConfirmCode(props) {
	const auth = useAuth();
	const [code, setCode] = useState("");
	const [validationText, setValidationText] = useState("")
	const [reqs, setReqs] = useState()
	function handleSubmit(e) {
		e.preventDefault();
		console.log(props.value, props.email)
		setValidationText("Validating...")
		submit(props.email,code).then(result => nextFunc(result));
	}

	function nextFunc(response) {
		if(!response.response.data.ok){
			//getPasswordRequirements().then(result => setReqs(result));
			props.onChange("RECOVER")
			

		}
		setValidationText(response.response.data.message)
	}

	return (
		<Form>
			<Fieldset>
				<Legend>Recover Password</Legend>
				<StyledMessageArea>
					If your account exists, a recovery code will be sent to the email
					address you provided. Please enter it below.
				</StyledMessageArea>
				<br></br>
				<input
					type="text"
					name="username"
					placeholder="Enter your password reset code"
					alertMessage="Alert message text"
					//onClick={() => setLoading("")}
					onChange={event => setCode(event)}
				/>

				<br></br>
				<FieldGroup>
					<Label htmlFor="email">Email</Label>
				</FieldGroup>
				<FieldGroup>
					<Link to="/auth/reset">
						<button onClick={e => handleSubmit(e)} className="button-secondary">
							Verify code
						</button>
					</Link>
					<div>{validationText}</div>
				</FieldGroup>
			</Fieldset>
		</Form>
	);
}
