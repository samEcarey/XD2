import React from "react";
import { Link } from "react-router-dom";

export function LinkForgotPassword({ label }) {
	return (
		<li>
			<Link to="/workspace/auth/forgotpassword">{label}</Link>
		</li>
	);
}
