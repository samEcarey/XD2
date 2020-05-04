import React from "react";
import { Link } from "react-router-dom";
import { Form, Fieldset, FieldGroup, Label } from "../../appbase";
import { AuthFooter } from "../components";

export function LoggedOut() {
	return (
		<Form>
			<Fieldset>
				<legend>Logged out</legend>
				<FieldGroup>
					<Label>Your have successfullyy logged out</Label>
				</FieldGroup>
				<FieldGroup>
					<Link to="/auth/login">
						<button>Login</button>
					</Link>
				</FieldGroup>
				<FieldGroup>
					<AuthFooter />
				</FieldGroup>
			</Fieldset>
		</Form>
	);
}
