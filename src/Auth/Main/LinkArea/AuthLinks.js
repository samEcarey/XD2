import React from "react";
import { withRouter } from "react-router-dom";

import { LinkLogin } from "./LinkLogin";
import { LinkRegister } from "./LinkRegister";
import { LinkForgotPassword } from "./LinkForgotPassword";

function LinkConditional(props) {
	const { location } = props;
	console.log(location);

	if (

		location.pathname === "/auth/login"
	) {
		return (
			<>
				<LinkForgotPassword label="Forgot your password?" />
			</>
		);
	}  else if (location.pathname === "/auth/forgot") {
		return (
			<>
				<LinkLogin label="Login" />
			</>
		);
	} else {
		return null;
	}
}

export const AuthLinks = withRouter(LinkConditional);
