import React from "react";
import { ScreenStyled } from "./Screen.styles";

export const Screen = ({ children, screenname, margin, padding }) => {
	return (
		<ScreenStyled
			className={screenname + "-screen"}
			margin={margin}
			padding={padding}
		>
			<>{children}</>
		</ScreenStyled>
	);
};
