import styled from "styled-components";

export const GridWorksectionSC = styled.section`
	display: grid;
	grid-template-columns: 8rem auto;
	grid-template-rows: auto;
	grid-column-gap: 0rem;
	grid-row-gap: 0rem;
	grid-template-areas: "workaside workmain";

	.Container-workaside {
		grid-area: workaside;
	}
	.Container-workmain {
		grid-area: workmain;
	}
`;
