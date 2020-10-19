import styled from "styled-components";
import { motion } from "framer-motion";
import { Breakpoints } from "app/common";
import { GREY_950 } from "app/constants";

export const TablefullStyled = styled(motion.div)`
	margin: 0rem 0rem 0rem 0rem;
	padding: 0rem 0rem 0rem 0rem;
	height: 0px;
	background: ${GREY_950};
	position: fixed;
	left: 0rem;
	top: 8rem;
	right: 0;
	z-index: 7;
	overflow: hidden;
	overflow-y: auto;
	@media ${Breakpoints.md} { top: 8rem; left: 0rem; }
	span.tablefull-close svg {
		position: absolute;
		right: 1rem;
		top: 0rem;
		z-index: 6;
		cursor: pointer;
		color: White;
		width: 60px;
		height: 60px;
	}
	.Tablefull-main {
		padding: 2rem;
	}
`;
