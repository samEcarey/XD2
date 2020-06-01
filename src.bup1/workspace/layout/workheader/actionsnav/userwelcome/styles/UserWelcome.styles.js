import styled from "styled-components";
import { PRIMARY_TINT, WHITE_COLOR, GREY_400 } from "app/constants"

export const UserWelcomeStyled = styled.div`
	display: flex;
	align-items: center;
	.User-text {
		color: ${GREY_400};
		font-weight: bold;
		text-align: right;
		font-size: 2rem;
		line-height: 2rem;
		span {
			display: block;
		}
		a {
			color: ${GREY_400};	
		}
	}
	.User-more {
		svg {
			width: 30px;
			height: 30px;
			color: ${WHITE_COLOR};
			margin: 1rem 1rem 0rem;
			cursor: pointer;
		}
	}
	figure.User-profile {
		margin: 0;
		padding: 0;
		width: 4.5rem;
		height: 4.5rem;
		background-color: ${PRIMARY_TINT};
		border-radius: 1rem;
	}
`;
