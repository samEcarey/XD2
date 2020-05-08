import React from "react";
import { ColumnStyled } from "./Column.styles";

export const Column = ({ children, columnname, margin, padding }) => {
	return (
		<ColumnStyled
			className={columnname + "-column"}
			margin={margin}
			padding={padding}
		>
			<>{children}</>
		</ColumnStyled>
	);
};
