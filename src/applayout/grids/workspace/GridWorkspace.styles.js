import styled from "styled-components";

export const GridWorkspaceStyled = styled.section`
	.Workspace-sidebar {
		display: none;
		@media (min-width: 1024px) {
			display: block;
		}
	}
	@media (min-width: 1024px) {
		display: grid;
		grid-template-columns: 80px 1fr;
		grid-template-rows: 1fr;
	}

	/* h1 { font-size: 0.5rem; } */
	@media (min-width: 640px) {
		/* h1 { font-size: 4.6rem; } */
	}
`;
