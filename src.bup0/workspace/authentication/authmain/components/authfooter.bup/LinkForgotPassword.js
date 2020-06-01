import React from "react";
import { Link } from "react-router-dom";

export function LinkForgotPassword() {
	return (
		<small>
			<Link to="workspace/auth/forgotpassword">Forgot Password?</Link>
		</small>
	);
}
