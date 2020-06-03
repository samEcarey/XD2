import styled from "styled-components";
import { breakpoints } from "app/common";
import { WHITE_COLOR } from "app/constants"

// 	@media ${breakpoints.lg} {}

export const IconMaximizeStyled = styled.svg`
	display: none;
	margin: 0;
	padding: 0;
	width: 3rem;
	height: 3rem;
	fill: ${WHITE_COLOR};
	&:hover {
		fill: ${WHITE_COLOR};
		cursor: pointer;
	}
	@media (min-width: 1024px) {
		display: block;
	}
`;

export const IconMaximizeAltStyled = styled(IconMaximizeStyled)``;
