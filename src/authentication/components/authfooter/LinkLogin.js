import React from "react";
import { Link } from "react-router-dom";

export function LinkLogin() {
	return (
		<small>
			<Link to="/auth/login">Login</Link>
		</small>
	);
}
