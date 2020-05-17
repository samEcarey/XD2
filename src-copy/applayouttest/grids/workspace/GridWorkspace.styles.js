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
`;
