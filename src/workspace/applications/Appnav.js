import React from "react";
import { Link } from "react-router-dom";

export const Appnav = ({ children }) => {
	return (
		<nav>
			<Link to="/">AN</Link>
			{children}
		</nav>
	);
};
