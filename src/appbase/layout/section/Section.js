import React from "react";
import { SectionStyled } from "./Sections.styles";

export const Section = ({ children, sectionname }) => {
	return (
		<SectionStyled className={sectionname + "-section"}>
			{children}
		</SectionStyled>
	);
};
