import React from "react";
import { ThemeWorkspaceSidebarStyled } from "./ThemeWorkspaceSidebar.styles";

export const ThemeWorkspaceSidebar = ({ children }) => {
	return (
		<ThemeWorkspaceSidebarStyled className="theme">
			{children}
		</ThemeWorkspaceSidebarStyled>
	);
};
