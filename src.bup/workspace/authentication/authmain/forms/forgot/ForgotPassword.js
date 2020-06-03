import React from "react";
import { Link } from "react-router-dom";
import { Form, Fieldset, Legend, FieldGroup, Label } from "app/common";

export function ForgotPassword() {
	return (
		<Form>
			<Fieldset>
				<Legend>Forgotten Password</Legend>
				<FieldGroup>
					<Label htmlFor="email">Email</Label>
					<input type="text" name="username" placeholder="Enter your email" />
				</FieldGroup>
				<FieldGroup>
					<button className="button-secondary">Get password</button>
				</FieldGroup>
			</Fieldset>
		</Form>
	);
}
