import React from "react";
import { DrawerStyled } from "../styles";
import { varientsDrawerLeftNav } from "../animation";

export const Drawer = ({ children, drawerLeftNavOpen }) => {
	return (
		<DrawerStyled
			variants={varientsDrawerLeftNav}
			initial="closed"
			animate={drawerLeftNavOpen ? "open" : "closed"}
			transition={{ damping: 300 }}
		>
			{children}
		</DrawerStyled>
	);
};
