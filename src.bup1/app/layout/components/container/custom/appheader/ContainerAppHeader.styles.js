import styled from "styled-components";
import { breakpoints } from "app/common";

// @media ${breakpoints.lg} {}
export const ContainerAppHeaderSC = styled.header`
	margin: 0rem;
	padding: 3rem 1.5rem 3rem 1.5rem;
	@media (min-width: 1024px) {
		margin: 0rem;
		padding: 1rem 1.5rem 1rem 1.5rem;
	}
`;
