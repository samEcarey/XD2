import React from "react";

const headerStyle = {
	padding: "1.5rem",
	background: "black"
};

export const Header = ({ children, style }) => {
	return <header style={headerStyle}>{children}</header>;
};
