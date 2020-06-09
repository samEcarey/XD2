import styled from "styled-components";
import { Breakpoints } from "app/common"

export const GridWorkheaderSC = styled.header`
	display: grid;
	grid-template-columns: 8rem 60% auto;
	//grid-template-rows: repeat(2, min-content);
	//grid-row-gap: 3rem;
	grid-column-gap: 2rem;
	grid-template-areas:
		"branding agencysearch actionsnav";
	height: 8rem;
	align-items: center;

	@media ${Breakpoints.sm} {
		display: grid;
		grid-template-columns: 8rem 70% auto;
		grid-column-gap: 2rem;
		grid-row-gap: 0px;
	}
	@media ${Breakpoints.ml} {
		grid-template-columns: 8rem 80% auto;
	}
	@media ${Breakpoints.lg} {
		grid-template-areas: "branding userwelcome agencysearch actionsnav";
		grid-template-columns: 8rem 29rem auto auto;
	}
	@media ${Breakpoints.xl} {
		grid-template-columns: 8rem 29rem 50rem auto;
	}
	.Workheader-branding {
		grid-area: branding;
	}
	.Workheader-userwelcome {
		grid-area: userwelcome;
	}
	.Workheader-agencysearch {
		grid-area: agencysearch;
	}
	.Workheader-actionsnav {
		grid-area: actionsnav;
	}
`;
