import styled from "styled-components";
import { motion } from "framer-motion";
import { Breakpoints } from "app/common";
import { GREY_950 } from "app/constants";

export const AgencySearchStyled = styled(motion.div)`
	height: 0px;
	background: ${GREY_950};
	position: fixed;
	left: 0rem;
	top: 8rem;
	right: 0;
	z-index: 9;
	text-align: center;
	overflow: hidden;
	overflow-y: auto;
	@media ${Breakpoints.lg} { left: 0rem; top: 8rem; }
`;
