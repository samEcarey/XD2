import React from "react";
import { Link } from "react-router-dom";
import { Form, Fieldset, FieldGroup, Label } from "../../appbase";
import { AuthFooter, Credit } from "../components";

export function ForgotPassword() {
	return (
		<Form>
			<Fieldset>
				<legend>Enter your email</legend>
				<FieldGroup>
					<Label htmlFor="email">Username</Label>
					<input type="text" name="username" />
				</FieldGroup>
				<FieldGroup>
					<Link to="/workspace">
						<button>Get password</button>
					</Link>
				</FieldGroup>
				<FieldGroup>
					<AuthFooter />
					<br />
					<Credit />
				</FieldGroup>
			</Fieldset>
		</Form>
	);
}
