import styled from "styled-components";
import { Breakpoints } from "app/common";

export const ApplicationBrandStyled = styled.figure`
	margin: 0rem 0.5rem 0rem 0rem;
	padding: 0rem 0rem 0rem 0rem;
	width: 6rem;
	height: 4.4rem;
	div.Skeleton-circle {
		width: 6rem;
		height: 4.4rem;
	}
	@media ${Breakpoints.lg} {
		margin: 0rem 1.5rem 0rem 0rem;
		padding: 0rem 0rem 0rem 0rem;
		width: 8rem;
		height: 4.4rem;
		div.Skeleton-circle {
			width: 8rem;
			height: 4.4rem;
		}
	}
`;
