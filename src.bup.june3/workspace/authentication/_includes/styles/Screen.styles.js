import styled from "styled-components";
import { PRIMARY_SHADE } from "app/data";
import { GradientLinearToTop, SHADOW_10 } from "app/constants";

export const StyledScreen = styled.section`
	${GradientLinearToTop}
	@media (min-width: 375px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
		align-items: center;
		margin: 0rem 0rem 0rem 0rem;
		padding: 6rem 0rem 0rem 0rem;
	}
	@media (min-width: 768px) {
		padding: 0rem 1.5rem 0rem 1.5rem;
		width: 100vw;
		height: 100vh;
	}
	@media (min-width: 1024px) {
		padding: 0rem 6rem 0rem 6rem;
	}
	@media (min-width: 1280px) {
		padding: 0rem 12rem 0rem 12rem;
	}
`;
