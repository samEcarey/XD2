import styled from "styled-components";

export const GridModuleViewStyled = styled.section`
	display: grid;
	grid-template-columns: 300px auto 80px;
	grid-template-rows: auto 1fr;
	grid-column-gap: 0px;
	grid-row-gap: 0px;

	grid-template-areas:
		"modulebrand moduleheader modulehelp"
		"moduleworkflow moduleworkflow moduleworkflow";

	section.Module-brand {
		grid-area: modulebrand;
		background-color: rgba(35, 35, 35, 0.3);
	}

	header.Module-header {
		grid-area: moduleheader;
		background-color: rgba(35, 35, 35, 0.2);
	}

	article.Module-article {
		grid-area: modulehelp;
		background-color: rgba(35, 35, 35, 0.2);
	}

	main.Module-workflow {
		grid-area: moduleworkflow;
		background-color: rgba(35, 35, 35, 0.1);
	}
`;
