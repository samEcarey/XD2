import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Form, Fieldset, FieldGroup, Label } from "app/common";
import { AuthFooter, Credit } from "../components";
import { fakeAuth } from "../private";

export function Login() {
	const [loading, setLoading] = useState("");
	let history = useHistory();
	let location = useLocation();
	let { from } = location.state || { from: { pathname: "/workspace" } };

	const loginFunc = e => {
		e.preventDefault();
		setLoading("You are going to login....");
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
						<button onClick={e => loginFunc(e)}>Login</button>
					</Link>
					<div id="loading">{loading}</div>
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
