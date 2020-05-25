import styled from "styled-components";

export const StyledGrid = styled.section`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: min-content auto;
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	@media (min-width: 640px) {
		grid-template-columns: 1fr 2fr;
		grid-template-rows: 60rem;
	}
`;
