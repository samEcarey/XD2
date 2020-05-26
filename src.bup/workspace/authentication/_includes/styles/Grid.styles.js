import styled from "styled-components";

export const StyledGrid = styled.section`
	@media (min-width: 768px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 60rem;
		grid-column-gap: 0px;
		grid-row-gap: 0px;
	}
	@media (min-width: 1280px) {
		grid-template-columns: 1.8fr 1.2fr;
	}
`;

/* display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: min-content auto;
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	@media (min-width: 640px) {
		grid-template-columns: 1fr 2fr;
		grid-template-rows: 60rem;
	} */
