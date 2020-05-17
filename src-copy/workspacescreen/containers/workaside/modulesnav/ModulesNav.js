import React from "react";
import { ModulesNavStyled } from "./styles";

export const ModulesNav = ({ children }) => {
	return (
		<ModulesNavStyled className="Workaside-modulesnav">
			{children}
		</ModulesNavStyled>
	);
};
