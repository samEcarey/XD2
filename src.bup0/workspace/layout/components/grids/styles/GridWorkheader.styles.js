import styled from "styled-components";

export const GridWorkheaderSC = styled.header`
	display: grid;
	grid-template-columns: auto 80px;
	grid-template-rows: repeat(2, min-content);
	grid-column-gap: 0rem;
	grid-row-gap: 3rem;
	grid-template-areas:
		"branding actionsnav"
		"agencysearch agencysearch";

	@media (min-width: 640px) {
		display: grid;
		grid-template-columns: 240px auto 80px;
		grid-template-rows: min-content;
		grid-column-gap: 0px;
		grid-row-gap: 0px;
		grid-template-areas: "branding agencysearch actionsnav";
	}
	@media (min-width: 992px) {
		grid-template-columns: 260px auto 260px;
	}
	@media (min-width: 1024px) {
		grid-template-columns: 440px auto 240px;
	}
	@media (min-width: 1280px) {
		grid-template-columns: 440px auto 440px;
	}
	.Workheader-branding {
		grid-area: branding;
	}
	.Workheader-agencysearch {
		grid-area: agencysearch;
	}
	.Workheader-actionsnav {
		grid-area: actionsnav;
	}
`;
