import React from "react";
import { Link } from "react-router-dom";

export function LinkRegister() {
	return (
		<small>
			<Link to="/auth/register">Not registered?</Link>
		</small>
	);
}
