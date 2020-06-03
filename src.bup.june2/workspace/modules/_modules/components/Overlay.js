import React from "react";
import { OverlayStyled } from "../styles"

export const Overlay = ({ toggleSidebar }) => {
	return (
		<OverlayStyled
			className="content-container-overlay"
			onClick={toggleSidebar}
		>
		</OverlayStyled>
	);
};
