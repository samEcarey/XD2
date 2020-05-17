import styled from "styled-components";
import { breakpoints } from "app/common";

// 	@media ${breakpoints.lg} {}

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
	@media (min-width: 1024px) {
		display: none;
	}
`;
