import styled from "styled-components";
import { breakpoints } from "app/common";

// @media ${breakpoints.lg} {}

export const MaxViewIconStyled = styled.svg`
	display: none;
	width: 2rem;
	height: 2rem;
	fill: rgba(26, 29, 31, 0.4);
	&:hover {
		fill: rgba(26, 29, 31, 0.6);
		cursor: pointer;
	}

	@media (min-width: 1024px) {
		display: block;
	}
`;
