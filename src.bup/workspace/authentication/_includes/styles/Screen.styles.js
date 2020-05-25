import styled from "styled-components";
import { PRIMARY_SHADE } from "app/data";
import { GradientLinearToTop, SHADOW_10 } from "app/constants";

export const StyledScreen = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
	align-items: center;
	margin: 0rem;
	padding: 1.5rem;
	${GradientLinearToTop}
	@media (min-width: 414px) {
		padding: 14%;
		width: 100vw;
		height: 100vh;
	}
	@media (min-width: 640px) {
		padding: 6rem;
		width: 100vw;
		height: 100vh;
	}
	@media (min-width: 992px) {
		padding: 12rem;
	}
	@media (min-width: 1024px) {
		padding: 20rem;
	}
	@media (min-width: 1280px) {
		padding: 30rem;
	}
`;
