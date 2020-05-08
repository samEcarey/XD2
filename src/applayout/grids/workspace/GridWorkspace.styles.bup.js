import styled from "styled-components";

export const GridWorkspaceStyled = styled.section`
	display: grid;
	grid-template-columns: 80px 1fr;
	grid-template-rows: 60px auto;
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	grid-template-areas:
		"appbrand appheader"
		"appsidebar appworkarea";
	width: 100vw;
	height: 100vh;

	section.App-brand {
		grid-area: appbrand;
		margin: 0rem;
		padding: 0.5rem 1.5rem 0.5rem 1.5rem;
		background-color: rgba(35, 35, 35, 1);
	}

	section.App-header {
		grid-area: appheader;
		background-color: rgba(35, 35, 35, 1);
	}

	section.App-sidebar {
		grid-area: appsidebar;
		background-color: rgba(35, 35, 35, 1);
	}

	section.App-workarea {
		grid-area: appworkarea;
		background-color: rgba(35, 35, 35, 0.2);
	}
`;
