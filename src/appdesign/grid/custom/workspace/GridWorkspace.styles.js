import styled from "styled-components";
import { breakpoints } from "../../../../appbase/utils/viewports";

export const GridWorkspaceSC = styled.section`
	@media ${breakpoints.lg} {
		display: grid;
		grid-template-columns: 80px auto;
		grid-template-rows: 1fr;
		grid-column-gap: 0px;
		grid-row-gap: 0px;
	}
	.Container-workaside {
		display: none;
		@media ${breakpoints.lg} {
			display: block;
		}
	}
	.Container-workmain {
	}
`;
