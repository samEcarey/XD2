import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import {
	Form,
	Fieldset,
	Legend,
	FieldGroup,
	FieldGroupLoginCheckbox,
	Label,
	Input,
	Button
} from "app/common";
import { fakeAuth } from "../../private";

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
				<Legend>Login</Legend>
				<FieldGroup>
					<Label htmlFor="username">Username</Label>
					<Input
						type="text"
						name="username"
						placeholder="Enter your username"
						alertMessage="Alert message text"
					/>
				</FieldGroup>
				<FieldGroup>
					<Label htmlFor="password">Password</Label>
					<Input
						type="password"
						name="password"
						placeholder="Enter your password"
						alertMessage="Alert message text"
					/>
				</FieldGroup>
				<FieldGroupLoginCheckbox classes="fieldgroup-checkbox">
					<div className="checkbox-left">
						<Label>Remember me
							<input type="checkbox" name="remember" className="form-input-checkbox" />
							<span class="checkmark"></span>
						</Label>
					</div>
				</FieldGroupLoginCheckbox>
				<FieldGroup>
					<button
						className="button-secondary button-pill"
						onClick={e => loginFunc(e)}
					>
						Login
					</button>
					<div id="loading">{loading}</div>
				</FieldGroup>
			</Fieldset>
		</Form>
	);
}
