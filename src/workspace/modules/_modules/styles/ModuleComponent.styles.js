import styled from "styled-components";

export const ModuleComponentStyled = styled.article`
	display: grid;
	grid-template-columns: 30rem auto;
	height: 100%;
	/* article.open */
	&.open {
		.content-container {
			transform: translateX(300px);
			&:after {
				-webkit-backdrop-filter: blur(10px);
				backdrop-filter: blur(10px);
			}
		}
		&#sidebar-toggle-button:before,
		&#sidebar-toggle-button:after {
			transform: rotate(45deg);
		}
	}
`;
