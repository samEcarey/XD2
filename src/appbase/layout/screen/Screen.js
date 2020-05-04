import React from "react";
import { ScreenStyled } from "./Screens.styles";

export const Screen = ({ children, screenname }) => {
	return (
		<ScreenStyled className={screenname + "-section"}>{children}</ScreenStyled>
	);
};
