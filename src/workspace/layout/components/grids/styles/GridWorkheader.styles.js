import styled from "styled-components";
import { Breakpoints } from "app/common"

export const GridWorkheaderSC = styled.header`
	display: grid;
	grid-template-columns: 1fr%;
	//grid-template-rows: repeat(2, min-content);
	//grid-row-gap: 3rem;
	grid-column-gap: 2rem;
	grid-template-areas:
		"agencysearch";
	height: 8rem;
	align-items: center;

	@media ${Breakpoints.sm} {
		display: grid;
		grid-template-areas:
		"branding agencysearch";
		grid-template-columns: 8rem 1fr;
		grid-column-gap: 2rem;
		grid-row-gap: 0px;
	}
	@media ${Breakpoints.ml} {
		grid-template-columns: 8rem 1fr;
	}
	@media ${Breakpoints.lg} {
		grid-template-areas: "branding userwelcome agencysearch actionsnav";
		grid-template-columns: 8rem 29rem 50rem auto;
	}
	@media ${Breakpoints.xl} {
		grid-template-columns: 8rem 29rem 50rem auto;
	}
	.Workheader-branding {
		grid-area: branding;
		display: none;
		@media ${Breakpoints.sm} { display: block; }
	}
	.Workheader-userwelcome {
		grid-area: userwelcome;
	}
	.Workheader-agencysearch {
		grid-area: agencysearch;
	}
	.Workheader-actionsnav {
		grid-area: actionsnav;
		display: none;
		@media ${Breakpoints.lg} { display: block; }
	}
`;
