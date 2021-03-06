import styled from "styled-components";
import { Breakpoints } from "app/common";
import { PRIMARY_SHADE, SECONDARY_SHADE, GREY_700, GREY_950 } from "app/constants";

export const UserLogOffNavStyled = styled.nav`
	margin: 0rem 0rem 0rem 0rem;
	padding: 0rem 0rem 0rem 0rem;
	ul {
		margin: 0rem 0rem 0rem 0rem;
		padding: 0rem 0rem 0rem 0rem;
		list-style: none;
		width: 100%;
		text-align: center;
		border-top: 1px solid ${PRIMARY_SHADE};
		li {
			margin: 1rem;
			width: 6rem;
			height: 6rem;
			display: flex;
			justify-content: center;
			align-items: center;
			&.active, &:hover {
				svg { color: ${SECONDARY_SHADE}; }
			}
			svg {
				width: 4rem;
				height: 4rem;
				color: ${GREY_700};
			}
		}
	}
`;
