import React from "react";
import { withRouter } from "react-router-dom";

import { LinkLogin } from "./LinkLogin";
import { LinkRegister } from "./LinkRegister";
import { LinkForgotPassword } from "./LinkForgotPassword";

function AuthFooterConditional(props) {
	const { location } = props;

	if (location.pathname === "workspace/auth/login") {
		return (
			<>
				<LinkForgotPassword /> | <LinkRegister />
			</>
		);
	} else if (location.pathname === "workspace/auth/register") {
		return (
			<>
				<LinkLogin /> | <LinkForgotPassword />
			</>
		);
	} else if (location.pathname === "workspace/auth/forgotpassword") {
		return (
			<>
				<LinkLogin /> | <LinkRegister />
			</>
		);
	} else {
		return null;
	}
}

export const AuthFooter = withRouter(AuthFooterConditional);
