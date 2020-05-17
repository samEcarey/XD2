import React from "react";
import { GridViewStyled } from "./GridView.styles";

export const GridView = ({ children, viewname, margin, padding }) => {
	return (
		<GridViewStyled
			className={viewname + "-view"}
			margin={margin}
			padding={padding}
		>
			{children}
		</GridViewStyled>
	);
};
