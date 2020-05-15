import styled from "styled-components";
import { breakpoints } from "../../../../../appbase/utils/viewports/Viewports";
import { SKELETON_TINT } from "../../../../../appdata";

export const AppActionsNavStyled = styled.nav`
	margin: 0rem 0rem 0rem 0rem;
	padding: 3rem 0rem 0rem 0rem;
	border-top: 1px solid ${SKELETON_TINT};
	ul {
		margin: 0;
		padding: 0;
		li {
			list-style: none;
			margin-bottom: 1.5rem;
		}
	}
	/* background: red; */
`;
