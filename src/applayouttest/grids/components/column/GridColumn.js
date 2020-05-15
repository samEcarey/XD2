import React from "react";
import { GridColumnStyled } from "./GridColumn.styles";

export const GridColumn = ({ children, columnname, margin, padding }) => {
	return (
		<GridColumnStyled
			className={columnname + "-column"}
			margin={margin}
			padding={padding}
		>
			<>{children}</>
		</GridColumnStyled>
	);
};
