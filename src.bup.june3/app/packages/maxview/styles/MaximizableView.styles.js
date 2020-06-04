import styled from "styled-components";

export const MaximizableViewStyled = styled.div`
	.maximizable-container {
		display: flex;
		flex-direction: row;
		.maximizable-content {
			width: 100%;
		}
	}

	.maximizable-container.fullscreen {
		flex-direction: column-reverse;
		justify-content: flex-end;
		align-items: flex-end;
		/* padding: 2rem; */

		padding: 0rem;
		background-color: white;
	}

	.maximizable-container.fullscreen .maximizable-content {
		width: 100%;
	}

	.maximizable-actions {
		/* width: 5rem; */
		/* margin-left: -4rem;
		margin-top: -1rem; */

		position: fixed;
		top: 1.8rem;
		right: 1.5rem;
		display: none;
		@media (min-width: 1024px) {
			display: inline-block;
		}
		.Max-button {
			background: red;
		}
		svg {
			fill: green;
			width: 2.4rem;
			height: 2.4rem;
			&:hover {
				fill: white;
				cursor: pointer;
			}
		}
	}

	.maximizable-container.fullscreen .maximizable-actions {
		width: auto;
		margin-left: auto;
	}

	.maximizable-actions button {
		background-color: white;
	}
`;
