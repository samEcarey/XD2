import React from "react";

export const Legend = ({ children, htmlFor }) => {
	return <legend htmlFor={htmlFor}>{children}</legend>;
};
