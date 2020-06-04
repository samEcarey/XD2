import styled from "styled-components";
import { Breakpoints } from "app/common";
import { WHITE_COLOR } from "app/constants";

// @media ${Breakpoints.lg} {}

export const AppIconStyled = styled.figure`
	display: flex;
	margin: 0rem 0rem 0rem 0rem;
	padding: 0rem 0rem 0rem 0rem;
	align-items: center;
	width: 4.5rem;
	height: 4.5rem;
	svg {
		width: 100%;
		fill: ${WHITE_COLOR};
	}
	div.Skeleton-circle {
		width: 4.5rem;
		height: 4.5rem;
	}
`;
