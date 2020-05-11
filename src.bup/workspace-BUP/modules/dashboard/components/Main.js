import React from "react";

const mainStyle = {
	padding: "1.5rem",
	background: "gray"
};

export const Main = ({ children, style }) => {
	return <main style={mainStyle}>{children}</main>;
};
