import React from "react";
import { Link } from "react-router-dom";

export function LinkLogin() {
	return (
		<small>
			<Link to="workspace/auth/login">Login</Link>
		</small>
	);
}
