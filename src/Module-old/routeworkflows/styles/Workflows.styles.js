import styled from "styled-components";
import { motion } from "framer-motion";
import { Breakpoints } from "app/common";
import { GREY_950 } from "app/constants";

export const WorkflowsStyled = styled(motion.div)`
	margin: 0rem 0rem 0rem 0rem;
	padding: 0rem 0rem 0rem 0rem;
	height: calc(100vh - 8rem);
	background: ${GREY_950};
	// position: fixed;
	// left: 8rem;
	// top: 8rem;
	// right: 0;
	// z-index: 7;
	overflow: hidden;
	overflow-y: auto;
	@media ${Breakpoints.md} { top: 8rem; left: 8rem; }

	.Workflows-inner {
		padding: 1.5rem;
	}
	
`;
