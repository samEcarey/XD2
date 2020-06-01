import styled from "styled-components";
import { breakpoints } from "app/common";
import { SKELETON_TINT } from "app/data";

export const UserActionsNavStyled = styled.nav`
	margin: 0rem 0rem 0rem 0rem;
	padding: 3rem 0rem 0rem 0rem;
	border-top: 1px solid ${SKELETON_TINT};
	ul {
		margin: 0;
		padding: 0;
		li {
			list-style: none;
			margin-bottom: 1.5rem;
			&:last-child {
				margin-top: 5rem;
			}
		}
	}
	/* background: red; */
`;
