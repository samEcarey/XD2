import React, { useState, useRef, wait } from "react";
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
import { useAuth } from "app/data";
import { motion } from "framer-motion";
import { cookies } from "app/data/cookie";

export function Login() {
	const [loading, setLoading] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	let isTyping = false;
	let history = useHistory();
	let location = useLocation();
	const loadingRef = useRef(null);

	const [loginError, setLoginError] = useState(<b>Invalid username or password</b>);
	const loginErrorMessage = (
		<motion.div
			style={{ color: "red" }}
			animate={{ scale: [1, 1.2, 1] }}
			tansition={{ duration: 0.6, times: [0.25, 0.25] }}
		>
			{loginError}
		</motion.div>
	);
	
	const auth = useAuth();

	let { from } = location.state || { from: { pathname: "/workspace" } };

	const loginFunc = e => {
		e.preventDefault();
		setLoading(<b>Signing you in...</b>);
		auth.signIn(username, password, () => updateLoadText());
	};

	const updateLoadText = () => {
		if (cookies.get("token") == null) {
			//handle empty user or pass
			if (username == "") {
				//setLoginError("Please enter a username")
			}
			if (password == "") {
				//setLoginError("Please enter a password")
			}

			setLoading(loginErrorMessage);
			//TODO: componentize this for consistent Error
		} else {
			setLoading("Signing you in...");
		}
	};

	return (
		<Form>
			<Fieldset>
				<Legend>Login</Legend>
				<FieldGroup>
					<input
						type="text"
						name="username"
						placeholder="Enter your username"
						alertMessage="Alert message text"
						onClick={() => setLoading("")}
						onChange={event => setUsername(event.target.value)}
					/>
				</FieldGroup>
				<FieldGroup>
					<input
						type="password"
						name="password"
						placeholder="Enter your password"
						onClick={() => setLoading("")}
						alertMessage="Alert message text"
						onChange={event => setPassword(event.target.value)}
					/>
				</FieldGroup>
				<FieldGroupLoginCheckbox classes="fieldgroup-checkbox">
					<div className="checkbox-left">
						<Label>
							Remember me
							<input
								type="checkbox"
								name="remember"
								className="form-input-checkbox"
							/>
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
					<div>{loading}</div>
				</FieldGroup>
			</Fieldset>
		</Form>
	);
}
