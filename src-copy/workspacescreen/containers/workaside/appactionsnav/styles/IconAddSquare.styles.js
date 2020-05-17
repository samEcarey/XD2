import styled from "styled-components";
import { breakpoints } from "../../../../../appbase/utils/viewports/Viewports";
import { SKELETON_SHADE, SKELETON_TINT } from "../../../../../appdata";

export const IconAddSquareStyled = styled.svg`
	display: none;
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

	@media ${breakpoints.lg} {
		display: block;
	}
`;
