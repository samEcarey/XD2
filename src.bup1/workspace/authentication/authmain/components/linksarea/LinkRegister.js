import React from "react";
import { Link } from "react-router-dom";

export function LinkRegister({ label }) {
	return (
		<li>
			<Link to="/workspace/auth/register">{label}</Link>
		</li>
	);
}
