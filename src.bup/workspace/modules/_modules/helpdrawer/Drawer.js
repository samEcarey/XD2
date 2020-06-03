import React from "react";
import { DrawerStyled } from "./styles"

export const Drawer = ({ children, helpDrawerOpen }) => {

	const variants = {
		open: { x: 0 },
		closed: { x: "100%", overflow: "hidden" }
	};

	return (
		<DrawerStyled
			className="Drawer-help"
			variants={variants}
			initial="closed"
			animate={helpDrawerOpen ? "open" : "closed"}
			transition={{ damping: 300 }}
		>
			{children}
		</DrawerStyled>
	);
};