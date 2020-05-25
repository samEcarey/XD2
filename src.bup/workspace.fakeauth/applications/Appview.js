import React from "react";
import { Link } from "react-router-dom";

export const Appview = ({ children, brand }) => {
	return (
		<div className={brand + "-view"}>
			<h1>Extra Duty Solutions</h1>
			{brand}
			{children}
		</div>
	);
};
