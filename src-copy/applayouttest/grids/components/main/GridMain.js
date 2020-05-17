import React from "react";
import { GridMainStyled } from "./GridMain.styles";

export const GridMain = ({ children, mainname, margin, padding }) => {
	return (
		<GridMainStyled
			className={mainname + "-main"}
			margin={margin}
			padding={padding}
		>
			<>{children}</>
		</GridMainStyled>
	);
};
