import styled from "styled-components";
import { breakpoints } from "app/common";
import { SKELETON_SHADE, SKELETON_TINT } from "app/data";

// @media ${breakpoints.lg} { }

export const IconAddSquareStyled = styled.svg`
	/* display: none; */
	display: block;
	margin: 0 auto;
	padding: 0;
	width: 4rem;
	height: 4rem;
	/* fill: currentColor; */
	fill: ${SKELETON_TINT};
	&:hover {
		fill: ${SKELETON_SHADE};
		cursor: pointer;
	}

	@media (min-width: 1024px) {
		/* display: block; */
	}
`;