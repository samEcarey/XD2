import styled from "styled-components";
import { Breakpoints } from "app/common";
import {
	PRIMARY_SHADE,
	SECONDARY_SHADE,
	GREY_700,
	GREY_950
} from "app/constants";

export const UserActionsNavStyled = styled.nav`
	margin: 0rem 0rem 0rem 0rem;
	padding: 0rem 0rem 0rem 0rem;
	ul {
		margin: 0rem 0rem 0rem 0rem;
		padding: 0rem 0rem 0rem 0rem;
		list-style: none;
		width: 100%;
		text-align: center;
		/* border-top: 1px solid ${PRIMARY_SHADE}; */
		border-bottom: 1px solid ${PRIMARY_SHADE};
		li a {
			margin: 1rem auto;
			background: ${PRIMARY_SHADE};
			width: 4rem;
			height: 4rem;
			border-radius: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;
			&.active,
			&:hover {
				background: ${GREY_950};
				svg {
					fill: ${SECONDARY_SHADE};
					color: ${SECONDARY_SHADE};
				}
			}
			svg {
				width: 2rem;
				height: 2rem;
				color: ${GREY_700};
				fill: ${GREY_700};
			}
		}
	}
`;
