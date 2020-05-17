import React from "react";
import { Link } from "react-router-dom";

export function LinkForgotPassword() {
	return (
		<small>
			<Link to="/auth/forgotpassword">Forgot Password?</Link>
		</small>
	);
}
