import React from "react";
import { SidebarToggleButtonStyled } from "../styles";

export const SidebarToggleButton = ({ toggleSidebar }) => {
	return (
		<SidebarToggleButtonStyled className="sidebar-toggle-container">
			<button id="sidebar-toggle-button" onClick={toggleSidebar}></button>
		</SidebarToggleButtonStyled>
	);
};