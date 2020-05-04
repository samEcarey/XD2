import React from "react";
import { Link } from "react-router-dom";
import { Form, Fieldset, FieldGroup, Label } from "../../appbase";
import { AuthFooter } from "../components";

export function Login() {
	return (
		<Form>
			<Fieldset>
				<legend>Login to Extra Duty Solutions</legend>
				<FieldGroup>
					<Label htmlFor="username">Username</Label>
					<input type="text" name="username" />
				</FieldGroup>
				<FieldGroup>
					<Label htmlFor="password">Password</Label>
					<input type="password" name="password" />
				</FieldGroup>
				<FieldGroup>
					<Link to="/workspace">
						<button>login</button>
					</Link>
				</FieldGroup>
				<FieldGroup>
					<AuthFooter />
				</FieldGroup>
			</Fieldset>
		</Form>
	);
}
