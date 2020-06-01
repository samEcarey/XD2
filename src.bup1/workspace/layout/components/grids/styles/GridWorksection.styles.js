import styled from "styled-components";

export const GridWorksectionSC = styled.section`
	display: grid;
	grid-template-columns: 0 auto;
	grid-template-rows: auto;
	grid-column-gap: 0rem;
	grid-row-gap: 0rem;
	.Container-workaside {
		visibility: hidden;
	}

	@media (min-width: 1024px) {
		grid-template-columns: 8rem auto;
		.Container-workaside {
			visibility: visible;
		}
	}
`;
