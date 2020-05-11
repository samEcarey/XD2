import React from "react";
import { GridRowStyled } from "./GridRow.styles";

export const GridRow = ({ children, rowname, margin, padding }) => {
	return (
		<GridRowStyled
			className={rowname + "-row"}
			margin={margin}
			padding={padding}
		>
			<>{children}</>
		</GridRowStyled>
	);
};
