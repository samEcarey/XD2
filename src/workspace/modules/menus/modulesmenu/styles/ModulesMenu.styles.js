import styled from "styled-components";
import {
	PRIMARY_SHADE,
	SECONDARY_SHADE,
	GREY_700,
	GREY_950
} from "app/constants";

export const ModulesMenuULStyled = styled.ul`
	margin: 0rem 0rem 0rem 0rem;
	padding: 0rem 0rem 0rem 0rem;
	list-style: none;
	width: 100%;
	text-align: center;
	border-top: 1px solid ${PRIMARY_SHADE};
	border-bottom: 1px solid ${PRIMARY_SHADE};
	li {
		margin: 1rem;
		background: ${PRIMARY_SHADE};
		border-radius: 0.5rem;
		width: 5.6rem;
		height: 5.6rem;
		display: flex;
		justify-content: center;
		align-items: center;
		&.active,
		&:hover {
			background: ${GREY_950};
			a {
				svg {
					color: ${SECONDARY_SHADE};
					fill: ${SECONDARY_SHADE};
				}
			}
		}
		a {
			display: flex;
			justify-content: center;
			align-items: center;
			svg {
				width: 5rem;
				height: 5rem;
				color: ${GREY_700};
				fill: ${GREY_700};
			}
		}
	}
`;
