import styled from "styled-components";
import { WHITE_COLOR } from "app/constants";
import { Breakpoints } from "app/common";

export const IconToggleStyled = styled.svg`
	margin: 0rem;
	padding: 0rem;
	width: 4rem;
	height: 4rem;
	fill: ${WHITE_COLOR};
	&:hover {
		fill: ${WHITE_COLOR};
		cursor: pointer;
	}
	@media ${Breakpoints.lg} {
		margin-right: 1.5rem;
		display: none;
	}
	/* @media ${Breakpoints.xl} {
		display: none;
	} */
`;
