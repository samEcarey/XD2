import styled from "styled-components";
import { Breakpoints } from "app/common";

// @media ${Breakpoints.lg} {}

export const AppIconStyled = styled.figure`
	display: none;
	margin: 0rem 1.5rem 0rem 0rem;
	padding: 0rem 0rem 0rem 0rem;
	@media (min-width: 375px) {
		display: inline-block;
	}
	@media ${Breakpoints.lg} {
		margin: 0rem 3rem 0rem 0rem;
		padding: 0rem 0rem 0rem 0rem;
	}
	width: 4.5rem;
	height: 4.5rem;
	div.Skeleton-circle {
		width: 4.5rem;
		height: 4.5rem;
	}
`;
