import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Form, Fieldset, Legend, FieldGroup, Label, Input } from "app/common";
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
				<Legend>Login to Extra Duty Solutions</Legend>
				<FieldGroup>
					<Label htmlFor="username">Username</Label>
					<Input
						type="text"
						name="username"
						alertMessage="Alert message text"
					/>
				</FieldGroup>
				<FieldGroup>
					<Label htmlFor="password">Password</Label>
					<Input
						type="password"
						name="password"
						alertMessage="Alert message text"
					/>
				</FieldGroup>
				<FieldGroup>
					<Label htmlFor="remember">Remember me</Label>
					<Input
						type="checkbox"
						name="remember"
						alertMessage="Alert message text"
					/>
				</FieldGroup>
				<FieldGroup>
					<Link to="/workspace">
						<button onClick={e => loginFunc(e)}>Login</button>
					</Link>
					<div id="loading">{loading}</div>
				</FieldGroup>
			</Fieldset>
		</Form>
	);
}
