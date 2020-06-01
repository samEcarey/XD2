import styled from "styled-components";
import { breakpoints } from "app/common";

// @media ${breakpoints.lg} { }
export const GridWorkspaceSC = styled.section`
	@media (min-width: 1024px) {
		display: grid;
		grid-template-columns: 80px auto;
		grid-template-rows: 1fr;
		grid-column-gap: 0px;
		grid-row-gap: 0px;
	}
	.Container-workaside {
		display: none;
		@media (min-width: 1024px) {
			display: block;
		}
	}
	.Container-workmain {
	}
`;
