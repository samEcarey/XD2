import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Form, Fieldset, FieldGroup, Label } from "../../appbase";
import { AuthFooter, Credit } from "../components";
import { fakeAuth } from "../private";

export function Login() {
	let history = useHistory();
	let location = useLocation();
	let { from } = location.state || { from: { pathname: "/workspace" } };

	let loginFunc = () => {
		setTimeout(
			() =>
				fakeAuth.authenticate(() => {
					history.replace(from);
				}),
			3000
		);
	};

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
						<button onClick={loginFunc}>Login</button>
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
