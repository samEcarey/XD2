import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const variants = {
	open: { x: 0 },
	closed: { x: "-100%" }
};

export const Drawer = ({ children, leftDrawerOpen }) => {
	return (
		<StyledDrawer
			variants={variants}
			initial="closed"
			animate={leftDrawerOpen ? "open" : "closed"}
			transition={{ damping: 300 }}
		>
			{children}
		</StyledDrawer>
	);
};

const StyledDrawer = styled(motion.section)`
	z-index: 9999;
	position: fixed;
	top: 0;
	left: 0;
	width: 300px;
	height: 100vh;

	padding: 1.5rem;
	background-color: purple;
	button {
		all: revert;
		cursor: pointer;
	}
	nav {
	}
`;
