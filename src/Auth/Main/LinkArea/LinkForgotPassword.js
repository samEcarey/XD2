import React from "react";
import { Link } from "react-router-dom";

export function LinkForgotPassword({ label }) {
	return (
		<li>
			<Link to="/auth/forgot">{label}</Link>
		</li>
	);
}
