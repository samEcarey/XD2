import React from "react";
import { DrawerStyled } from "../styles";
import { drawerLeftDesktopVariants } from "../constants";

export const Drawer = ({ children, leftDrawerOpen }) => {
	return (
		<DrawerStyled
			variants={drawerLeftDesktopVariants}
			initial="closed"
			animate={leftDrawerOpen ? "open" : "closed"}
			transition={{ damping: 300 }}
		>
			{children}
		</DrawerStyled>
	);
};
