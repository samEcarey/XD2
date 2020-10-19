import styled from "styled-components";
import { Breakpoints } from "app/common";
import { WHITE_COLOR, GREY_950, SECONDARY_SHADE } from "app/constants";

// @media ${Breakpoints.lg} {}

export const AppIconStyled = styled.figure`
	display: flex;
	margin: 0rem 0rem 0rem 0rem;
	padding: 0rem 0rem 0rem 0rem;
	align-items: center;
	width: 6.5rem;
	height: 6.5rem;
	padding: 1rem;
	border-radius: 100%;
	cursor: pointer;
	&:hover {
		background: ${GREY_950};
		svg {
			fill: ${SECONDARY_SHADE};
		}
	}
	svg {
		width: 100%;
		fill: ${WHITE_COLOR};
	}
	div.Skeleton-circle {
		width: 4.5rem;
		height: 4.5rem;
	}
`;
