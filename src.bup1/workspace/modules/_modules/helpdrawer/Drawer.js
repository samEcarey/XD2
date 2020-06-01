import React from "react";
import styled from "styled-components";
import { PRIMARY_SHADE } from "app/constants";
import { motion } from "framer-motion";

const variants = {
	open: { x: 0 },
	closed: { x: "100%", overflow: "hidden" }
};

export const Drawer = ({ children, helpDrawerOpen }) => {
	return (
		<StyledDrawer
			className="Drawer-help"
			variants={variants}
			initial="closed"
			animate={helpDrawerOpen ? "open" : "closed"}
			transition={{ damping: 300 }}
		>
			{children}
		</StyledDrawer>
	);
};

const StyledDrawer = styled(motion.section)`
	z-index: 5;
	position: absolute;
	top: 0;
	right: 0;
	width: 300px;
	height: 100%;
	padding: 2rem 1rem;
	background-color: ${PRIMARY_SHADE};
`;
