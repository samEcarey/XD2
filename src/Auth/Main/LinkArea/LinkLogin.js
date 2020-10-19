import React from "react";
import { Link } from "react-router-dom";

export function LinkLogin({ label }) {
	return (
		<li>
			<Link to="/auth/login">{label}</Link>
		</li>
	);
}
