import React from "react";
import { GridScreenStyled } from "./GridScreen.styles";

export const GridScreen = ({ children, screenname, margin, padding }) => {
	return (
		<GridScreenStyled
			className={screenname + "-screen"}
			margin={margin}
			padding={padding}
		>
			<>{children}</>
		</GridScreenStyled>
	);
};
