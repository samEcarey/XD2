import React from "react";
import { AppActionsNavStyled } from "./styles";

export const AppActionsNav = ({ children }) => {
	return (
		<AppActionsNavStyled className="Workaside-appactionsnav">
			{children}
		</AppActionsNavStyled>
	);
};
