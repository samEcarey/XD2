import React from "react";
import { Link } from "react-router-dom";
import { Form, Fieldset, FieldGroup, Label } from "app/common";
import { AuthFooter, Credit } from "../components";

export function Register() {
	return (
		<Form>
			<Fieldset>
				<legend>Register an account</legend>
				<FieldGroup>
					<Label htmlFor="firstname">First name</Label>
					<input type="text" name="firstname" />
				</FieldGroup>
				<FieldGroup>
					<Label htmlFor="lastname">Last name</Label>
					<input type="text" name="lastname" />
				</FieldGroup>
				<FieldGroup>
					<Label htmlFor="email">Email</Label>
					<input type="email" name="email" />
				</FieldGroup>
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
						<button>Register</button>
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
