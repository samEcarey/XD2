import styled from "styled-components";
import { PRIMARY_SHADE, SECONDARY_COLOR, WHITE_COLOR, GREY_950 } from "app/constants";

export const MenuGroupNameStyled = styled.div`
	.MenuGroupNav-name {
		display: flex;
		justify-content: space-between;
		margin: 0rem 0rem 0rem 0rem;
		padding: 0rem 0rem 0rem 0rem;
		border-bottom: 1px solid ${SECONDARY_COLOR};
		svg {
			color: ${WHITE_COLOR};
			cursor: pointer;
		}
		h3 {
			display: block;
			font-size: 1.8rem;
			color: ${SECONDARY_COLOR};
			font-weight: bold;
			text-transform: uppercase;
		}
}
`;
