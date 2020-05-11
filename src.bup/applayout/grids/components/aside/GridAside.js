import React from "react";
import { GridAsideStyled } from "./GridAside.styles";

export const GridAside = ({ children, asidename, margin, padding }) => {
	return (
		<GridAsideStyled
			className={asidename + "-aside"}
			margin={margin}
			padding={padding}
		>
			{children}
		</GridAsideStyled>
	);
};
