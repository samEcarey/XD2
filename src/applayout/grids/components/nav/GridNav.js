import React from "react";
import { GridNavStyled } from "./GridNav.styles";

export const GridNav = ({ children, navname, margin, padding }) => {
	return (
		<GridNavStyled
			className={navname + "-nav"}
			margin={margin}
			padding={padding}
		>
			<>{children}</>
		</GridNavStyled>
	);
};
