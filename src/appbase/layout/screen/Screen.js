import React from "react";
import { ScreenStyled } from "./Screens.styles";

export const Screen = ({ children, screenname, type }) => {
	return (
		<ScreenStyled className={screenname + "-section"} type={type}>
			{children}
		</ScreenStyled>
	);
};
