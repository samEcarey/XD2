import styled from "styled-components";
import { breakpoints } from "../../../../../../../appbase/utils/viewports";

export const ToggleStyled = styled.div`
	/* padding-top: 1rem; */
	svg {
		width: 2.4rem;
		height: 2.4rem;
		fill: rgba(26, 29, 31, 0.4);
		&:hover {
			fill: rgba(26, 29, 31, 0.6);
			cursor: pointer;
		}
	}
	@media ${breakpoints.lg} {
		display: none;
	}
`;
