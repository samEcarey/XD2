import React from "react";
import { ViewStyled } from "./View.styles";

export const View = ({ children, viewname, margin, padding }) => {
	return (
		<ViewStyled
			className={viewname + "-view"}
			margin={margin}
			padding={padding}
		>
			{children}
		</ViewStyled>
	);
};
