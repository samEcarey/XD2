import React from "react";
import { SectionStyled } from "./Section.styles";

export const Section = ({ children, sectionname, margin, padding }) => {
	return (
		<SectionStyled
			className={sectionname + "-section"}
			margin={margin}
			padding={padding}
		>
			<>{children}</>
		</SectionStyled>
	);
};
