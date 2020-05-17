import React from "react";
import { GridContainerStyled } from "./GridContainer.styles";

export const GridContainer = ({ children, containername, margin, padding }) => {
	return (
		<GridContainerStyled
			className={containername + "-container"}
			margin={margin}
			padding={padding}
		>
			<>{children}</>
		</GridContainerStyled>
	);
};
