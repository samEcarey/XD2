import React from "react";
import { ModuleContentStyled } from "../styles";

export const ModuleContent = ({ children }) => {
	return (
		<ModuleContentStyled className="content-container">
			{children}
		</ModuleContentStyled>
	);
};
