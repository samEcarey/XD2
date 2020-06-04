import React from "react";
import { DrawerStyled } from "../styles";
import { drawerPushRightVariants } from "../constants";

export const Drawer = ({ children, leftPushDrawerOpen }) => {
	return (
		<DrawerStyled
			variants={drawerPushRightVariants}
			initial="closed"
			animate={leftPushDrawerOpen ? "open" : "closed"}
			transition={{ damping: 300 }}
		>
			{children}
		</DrawerStyled>
	);
};
