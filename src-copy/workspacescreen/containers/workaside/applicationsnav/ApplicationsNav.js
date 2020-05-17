import React from "react";
import { ApplicationsNavStyled } from "./styles";

export const ApplicationsNav = ({ children }) => {
	return (
		<ApplicationsNavStyled className="Workaside-applicationsnav">
			{children}
		</ApplicationsNavStyled>
	);
};
