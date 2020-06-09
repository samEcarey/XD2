import styled from "styled-components";
import { motion } from "framer-motion";
import { Breakpoints } from "app/common";
import { WHITE_COLOR, PRIMARY_COLOR, PRIMARY_TINT, PRIMARY_SHADE, GREY_950 } from "app/constants"

export const OverlayAgencySearchStyled = styled(motion.div)`
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
