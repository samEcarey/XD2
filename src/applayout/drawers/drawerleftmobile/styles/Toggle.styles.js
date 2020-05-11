import styled from "styled-components";

export const ToggleStyled = styled.div`
	cursor: pointer;
	svg {
		fill: green;
		width: 3rem;
		height: 3rem;
		path {
		}
		&:hover {
			opacity: 0.5;
		}
	}
	@media (min-width: 1024px) {
		display: none;
	}
`;
