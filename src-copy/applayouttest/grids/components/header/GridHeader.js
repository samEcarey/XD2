import React from "react";
import { GridHeaderStyled } from "./GridHeader.styles";

export const GridHeader = ({ children, headername, margin, padding }) => {
	return (
		<GridHeaderStyled
			className={headername + "-header"}
			margin={margin}
			padding={padding}
		>
			<>{children}</>
		</GridHeaderStyled>
	);
};
