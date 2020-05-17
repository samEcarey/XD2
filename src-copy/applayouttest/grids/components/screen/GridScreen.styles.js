import styled from "styled-components";

export const GridScreenStyled = styled.section`
	display: grid;
	grid-template-columns: 80px 1fr;
	grid-template-rows: 60px auto;
	grid-template-areas:
		"appbranding appheader"
		"appsidebar appmain";
	width: 100vw;
	height: 100vh;

	section {
		grid-area: appbranding;
	}

	header {
		grid-area: appheader;
	}

	aside {
		grid-area: appsidebar;
	}

	main {
		grid-area: appmain;
	}
`;
