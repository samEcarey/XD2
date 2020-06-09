import styled from "styled-components";
import { motion } from "framer-motion";
import { Breakpoints } from "app/common";
import { PRIMARY_SHADE, GREY_950, WHITE_COLOR, PRIMARY_TINT } from "app/constants";

export const OverlayMenugroupsStyled = styled(motion.div)`
	margin: 0rem 0rem 0rem 0rem;
	height: 0px;
	background: ${GREY_950};
	position: fixed;
	left: 0rem;
	top: 8rem;
	right: 0;
	z-index: 5;
	overflow: hidden;
	overflow-y: auto;
	@media ${Breakpoints.md} { top: 8rem; }
	span.overlay-close svg {
		position: absolute;
		right: 1rem;
		top: 0rem;
		z-index: 6;
		cursor: pointer;
		color: White;
		width: 60px;
		height: 60px;
	}
	& > .Card {
		padding: 4.5rem 1.5rem 1.5rem 1.5rem;
	}
	.Card-menugroup {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		padding: 1.5rem 1.5rem 1.5rem 1.5rem;
		@media ${Breakpoints.md} {
			flex-direction: row;
		}
		.Card {
			width: 100%;
			margin-bottom: 2rem;
			padding: 2rem;
			border:1px solid ${PRIMARY_TINT};
			border-radius: 1rem;
			@media ${Breakpoints.md} {
				padding: 3rem;
				margin-bottom: 0rem;
				width: 48%;
			}
		}
	}
	.Card {
		.Card-leftspace {
			padding-left: 0rem;
		}
		h2,
		h3,
		p,
		ul {
			margin: 0rem 0rem 0rem 0rem;
			padding: 0rem 0rem 0rem 0rem;
		}
	}
`;
