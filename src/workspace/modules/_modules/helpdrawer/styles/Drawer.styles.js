import styled from "styled-components";
import { motion } from "framer-motion";
import { PRIMARY_SHADE } from "app/constants";

export const DrawerStyled = styled(motion.section)`
	z-index: 5;
	position: absolute;
	top: 0;
	right: 0;
	width: 300px;
	height: 100%;
	padding: 2rem 1rem;
	background-color: ${PRIMARY_SHADE};
`;
