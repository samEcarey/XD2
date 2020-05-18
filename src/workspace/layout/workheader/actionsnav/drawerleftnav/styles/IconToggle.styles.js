import styled from "styled-components";
import { breakpoints } from "app/common";

// 	@media ${breakpoints.lg} {}

export const IconToggleStyled = styled.svg`
	margin: 0rem;
	padding: 0rem;
	width: 2.4rem;
	height: 2.4rem;
	fill: rgba(26, 29, 31, 0.4);
	&:hover {
		fill: rgba(26, 29, 31, 0.6);
		cursor: pointer;
	}
	@media (min-width: 1024px) {
		margin-right: 1.5rem;
	}
	@media (min-width: 1280px) {
		display: none;
	}
`;
