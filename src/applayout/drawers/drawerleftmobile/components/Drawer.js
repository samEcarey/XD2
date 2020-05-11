import React from "react";
import { DrawerStyled } from "../styles";
import { drawerLeftMobileVariants } from "../constants";

export const Drawer = ({ children, leftDrawerOpen }) => {
	return (
		<DrawerStyled
			variants={drawerLeftMobileVariants}
			initial="closed"
			animate={leftDrawerOpen ? "open" : "closed"}
			transition={{ damping: 300 }}
		>
			{children}
		</DrawerStyled>
	);
};
