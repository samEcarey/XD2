import styled from "styled-components";
import { PRIMARY_SHADE, GREY_950, WHITE_COLOR, PRIMARY_TINT } from "app/constants";

export const MenuGroupTitleStyled = styled.div`
	margin: 0rem 0rem 0rem 0rem;
	padding: 2rem 1.5rem 2rem 1.5rem;
	background-color: ${PRIMARY_TINT};
	color: ${WHITE_COLOR};

	h2 {
		font-size: 2rem;
	}
	p {
		font-size: 1.2rem;
	}
`;
