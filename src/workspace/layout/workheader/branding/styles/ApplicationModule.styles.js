import styled from "styled-components";

export const ApplicationModuleStyled = styled.figure`
	margin: 0.4rem 1.5rem 0rem 0rem;
	padding: 0;
	width: 10rem;
	height: 2rem;
	div.Skeleton-bone {
		width: 10rem;
		height: 2rem;
	}
	@media (min-width: 1024px) {
		width: 20rem;
		height: 2.4rem;
		div.Skeleton-bone {
			width: 20rem;
			height: 2.4rem;
		}
		margin-top: 0.2rem;
	}
	/* background: orange; */
`;
