import styled from "styled-components";
import { WHITE_COLOR, PRIMARY_TINT, GREY_500 } from "app/constants";

export const SidebarToggleButtonStyled = styled.div`
	margin: 0rem 2rem 0rem 0rem;
	background-color: ${PRIMARY_TINT};
	color: ${WHITE_COLOR};
	border-radius: 1rem;
	height: 6rem;
	width: 6rem;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	span {
		display: flex;
		align-items: center;
		justify-content: center;
		color: ${GREY_500};
		svg {
			position: relative;
			height: 4rem;
			width: 4rem;
			cursor: pointer;
			background: transparent;
			border: none;
			z-index: 2;
		}
	}
	
`;
