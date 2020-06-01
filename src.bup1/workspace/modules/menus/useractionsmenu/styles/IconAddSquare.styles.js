import styled from "styled-components";
import { breakpoints } from "app/common";
import { SKELETON_SHADE, SKELETON_TINT } from "app/data";
import { GREY_700, WHITE_COLOR, PRIMARY_SHADE } from "app/constants";

// @media ${breakpoints.lg} { }

export const IconAddSquareStyled = styled.svg`
	/* display: none; */
	display: block;
	margin: 0 auto;
	padding: 0;
	width: 4rem;
	height: 4rem;
	padding: 5px;
	/* fill: currentColor; */
	fill: ${GREY_700};
	&:hover {
		fill: ${WHITE_COLOR};
		cursor: pointer;
		background-color: ${PRIMARY_SHADE};
		border-radius: 100%;
	}

	@media (min-width: 1024px) {
		/* display: block; */
	}
`;
