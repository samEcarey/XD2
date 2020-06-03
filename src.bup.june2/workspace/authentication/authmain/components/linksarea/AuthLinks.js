import React from "react";
import { withRouter } from "react-router-dom";

import { LinkLogin } from "./LinkLogin";
import { LinkRegister } from "./LinkRegister";
import { LinkForgotPassword } from "./LinkForgotPassword";

function LinkConditional(props) {
	const { location } = props;
	console.log(location);

	if (
		location.pathname === "/workspace/auth" ||
		location.pathname === "/workspace/auth/login"
	) {
		return (
			<>
				<LinkRegister label="Register" />
				<LinkForgotPassword label="Forgot your password?" />
			</>
		);
	} else if (location.pathname === "/workspace/auth/register") {
		return (
			<>
				<LinkLogin label="Login" />
				<LinkForgotPassword label="Forgot your password?" />
			</>
		);
	} else if (location.pathname === "/workspace/auth/forgotpassword") {
		return (
			<>
				<LinkLogin label="Login" />
				<LinkRegister label="Register" />
			</>
		);
	} else {
		return null;
	}
}

export const AuthLinks = withRouter(LinkConditional);
