import React from "react";
import { FlexWorkspaceSidebarStyled } from "./FlexWorkspaceSidebar.styles";

export const FlexWorkspaceSidebar = ({ children }) => {
	return (
		<FlexWorkspaceSidebarStyled className="flex">
			{children}
		</FlexWorkspaceSidebarStyled>
	);
};
