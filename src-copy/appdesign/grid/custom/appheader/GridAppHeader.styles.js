import styled from "styled-components";
import { breakpoints } from "../../../../appbase/utils/viewports";

export const GridAppHeaderSC = styled.section`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(2, 1fr);
	grid-column-gap: 1.5rem;
	grid-row-gap: 1.5rem;
	.Appheader-branding {
		grid-area: 1 / 1 / 2 / 3;
	}
	.Appheader-agencysearch {
		grid-area: 2 / 1 / 3 / 4;
	}
	.Appheader-actionsnav {
		grid-area: 1 / 3 / 2 / 4;
	}
	@media ${breakpoints.ml} {
		display: grid;
		grid-template-columns: 40rem auto 20rem;
		grid-template-rows: 1fr;
		grid-column-gap: 0px;
		grid-row-gap: 0px;

		.Appheader-branding {
			grid-area: 1 / 1 / 2 / 2;
		}
		.Appheader-agencysearch {
			grid-area: 1 / 2 / 2 / 3;
		}
		.Appheader-actionsnav {
			grid-area: 1 / 3 / 2 / 4;
		}
	}
	@media ${breakpoints.xl} {
		grid-template-columns: 40rem 60rem auto;
	}

	.Appheader-branding {
		/* background: green; */
	}
	.Appheader-agencysearch {
		/* background: red; */
	}
	.Appheader-actionsnav {
		/* background: purple; */
	}
`;
