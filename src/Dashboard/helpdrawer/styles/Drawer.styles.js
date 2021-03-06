import styled from "styled-components";
import { motion } from "framer-motion";
import { PRIMARY_SHADE, GREY_950 } from "app/constants";

export const DrawerStyled = styled(motion.section)`
	z-index: 5;
	position: fixed;
	top: 0;
	right: 0;
	width: 300px;
	height: 100%;
	padding: 2rem 1rem;
	background-color: ${GREY_950};
`;
