import styled from "styled-components";
import { motion } from "framer-motion";

export const DrawerStyled = styled(motion.section)`
	z-index: 9999;
	position: absolute;
	top: 60px;
	left: 80px;
	height: 100vh;
	/* padding: 1.5rem; */
	background-color: purple;
	button {
		all: revert;
		cursor: pointer;
	}
	nav {
	}
`;
