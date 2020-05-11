import React from "react";
import { GridSectionStyled } from "./GridSection.styles";

export const GridSection = ({ children, sectionname, margin, padding }) => {
	return (
		<GridSectionStyled
			className={sectionname + "-section"}
			margin={margin}
			padding={padding}
		>
			<>{children}</>
		</GridSectionStyled>
	);
};
