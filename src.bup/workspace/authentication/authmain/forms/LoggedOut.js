import React from "react";
import { Link } from "react-router-dom";
import { Form, Fieldset, Legend, FieldGroup, Label } from "app/common";

export function LoggedOut() {
	return (
		<Form>
			<Fieldset>
				<Legend>Logged out</Legend>
				<FieldGroup>
					<Label>Your have successfullyy logged out</Label>
				</FieldGroup>
				<FieldGroup>
					<Link to="workspace/auth/login">
						<button>Login</button>
					</Link>
				</FieldGroup>
			</Fieldset>
		</Form>
	);
}
