import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Form, Fieldset, Legend, FieldGroup, Label } from "app/common";
import { useAuth, getPasswordRequirements } from "app/data";
import ReactCodeInput from "react-verification-code-input";
import { resetPassword } from "app/data/api/api";
import { FaTimes, FaCheck } from "react-icons/fa";

import { StyledMessageArea } from "../../styles";
export function ResetPassword(e) {
	const auth = useAuth();

	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [validPasswordMessage, setValidPasswordMessage] = useState("");
	const [reqs, setReqs] = useState()
	const [buttonState, setButtonState] = useState(false)


	useEffect(() => {
		console.log(reqs)
		getPasswordRequirements().then(result => setReqs(result.data.payload));

	  }, []);
	
	function nextFunc(response){
		console.log(response)
		setReqs(response.response.data.message)
		console.log(reqs)
	}

	useEffect(() => {
		if(reqs){
			formValidation();
		}
		
	}, [password,confirmPassword, reqs]);

	function formValidation() {
		const remainingRequirements = [];
		const remainingErrors = []
		if (password.length < reqs.minlength) {
			setButtonState(true)
			console.log(!password.localeCompare(confirmPassword))
			remainingRequirements.push(
				<div style={{ color: "maroon" }}>
					<FaTimes /> <b>{"Passwords must be " +reqs.minlength+" or more characters"}</b>
				</div>
			);
		} else {
			setButtonState(false)

			remainingRequirements.push(
				<div style={{ color: "skyblue" }}>
					<FaCheck /> <b>Your password is long en
						ough</b>
				</div>
			);
		}
	
		if (password.localeCompare(confirmPassword) ||  password==="") {
			setButtonState(true)

			remainingRequirements.push(
				<div style={{ color: "maroon" }}>
					<FaTimes /> <b>Password and confirmation must match</b>
				</div>
			);
		} else{
			setButtonState(false)

			remainingRequirements.push(
				<div style={{ color: "skyblue" }}>
					<FaCheck /> <b>Password and confirmation match</b>
				</div>
			);
		}

		setValidPasswordMessage(remainingErrors);
		
	}
	const requirementObject = errorMessage => {
		return (<FaTimes></FaTimes>), { errorMessage };
	};

	function handleSubmit(e) {
		e.preventDefault();
		//console.log("code", code)
		//	auth.submit(code, () => nextFunc());
	}
	function nextFunc() {}

	return (
		<Form>
			<Fieldset>
				<Legend>Recover Password</Legend>
				<StyledMessageArea>
					Please enter a new password, and confirm it below. This will be your
					new password.
				</StyledMessageArea>
				<br></br>
				<FieldGroup>
					<input
						type="password"
						name="password"
						placeholder="Enter your new password"
						alertMessage="Alert message text"
						//onClick={() => setLoading("")}
						onChange={event => setPassword(event.target.value)}
					/>
				</FieldGroup>

				<FieldGroup>
					<input
						type="password"
						name="password"
						placeholder="Confirm your new password"
						alertMessage="Alert message text"
						//onClick={() => setLoading("")}
						onChange={event => setConfirmPassword(event.target.value)}
					/>
				</FieldGroup>

				<br></br>
				<FieldGroup>
					<Label htmlFor="email">Email</Label>
				</FieldGroup>
				<FieldGroup>
					<button disabled ={buttonState} onClick={e => handleSubmit(e)} className="button-secondary">
						Change my password
					</button>
				</FieldGroup>
				<div>{validPasswordMessage}</div>
			</Fieldset>
		</Form>
	);
}
