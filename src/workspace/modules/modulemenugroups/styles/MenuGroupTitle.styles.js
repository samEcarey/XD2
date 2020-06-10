import styled from "styled-components";
import { Breakpoints } from "app/common";
import { PRIMARY_SHADE, GREY_950, WHITE_COLOR, PRIMARY_TINT } from "app/constants";

export const MenuGroupTitleStyled = styled.div`
	margin: 0rem 0rem 0rem 0rem;
	padding: 2rem 0rem 2rem 0rem;
	color: ${WHITE_COLOR};

	h2 {
		font-size: 2rem;
		text-transform: uppercase;
		@media ${Breakpoints.md} {
			font-size: 3rem;
		}
	}
	span.datetime, p {
		font-size: 1.5rem;
	}
`;
