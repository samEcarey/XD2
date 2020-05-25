import React from "react";
import { Link } from "react-router-dom";
import { Form, Fieldset, Legend, FieldGroup, Label } from "app/common";

export function ForgotPassword() {
	return (
		<Form>
			<Fieldset>
				<Legend>Enter your email</Legend>
				<FieldGroup>
					<Label htmlFor="email">Email</Label>
					<input type="text" name="username" />
				</FieldGroup>
				<FieldGroup>
					<Link to="/workspace">
						<button>Get password</button>
					</Link>
				</FieldGroup>
			</Fieldset>
		</Form>
	);
}
