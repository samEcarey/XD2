import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Form, Fieldset, Legend, FieldGroup, Label } from "app/common";
import { useAuth, resetPassword } from "app/data";

export function ForgotSplash(props){
	const [email, setEmail] = useState("");
    const [emailValidationText, setEmailValidationText] = useState("");

   
    function handleForgot(e) {
		e.preventDefault()
		resetPassword(email).then((result)=>{
            console.log(result)
            props.onChange("CONFIRM", email)

        })
		
	}
    return(
        <Form>
			<Fieldset>
				<Legend>Recover Password</Legend>

				<FieldGroup>
					<Label htmlFor="email">Email</Label>
					<input
						type="text"
						name="username"
						placeholder="Enter your email"
						alertMessage="Alert message text"
						//onClick={() => setLoading("")}
						onChange={event => setEmail(event.target.value)}
					/>
				</FieldGroup>
				<FieldGroup>
						<button onClick={e => handleForgot(e)} className="button-secondary">
							email me a recovery code
						</button>
					<div>{emailValidationText}</div>
				</FieldGroup>
			</Fieldset>
		</Form>
    )
}