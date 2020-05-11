import styled from "styled-components";
import { motion } from "framer-motion";

export const DrawerStyled = styled(motion.section)`
	z-index: 9999;
	position: fixed;
	top: 0;
	left: 0;
	width: 300px;
	height: 100vh;

	padding: 1.5rem;
	background-color: orange;
	button {
		all: revert;
		cursor: pointer;
	}
	nav {
	}
`;
