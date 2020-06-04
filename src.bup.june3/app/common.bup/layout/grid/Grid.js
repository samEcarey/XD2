import React from "react";
import { GridStyled } from "./Grid.styles";

export const Grid = ({ children, gridname, margin, padding }) => {
	return (
		<GridStyled
			className={gridname + "-grid"}
			margin={margin}
			padding={padding}
		>
			<>{children}</>
		</GridStyled>
	);
};
