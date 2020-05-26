import React from "react";
import styled from "styled-components";
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

	padding: 1.5rem;
	background-color: Green;
	button {
		all: revert;
		cursor: pointer;
	}
	nav {
	}
`;
