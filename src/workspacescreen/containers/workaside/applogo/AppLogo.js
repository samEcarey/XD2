import React from "react";
import { AppLogoStyled } from "./styles";

export const AppLogo = ({ children }) => {
	return (
		<AppLogoStyled className="Workaside-applogo">{children}</AppLogoStyled>
	);
};
