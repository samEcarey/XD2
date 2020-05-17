import styled from "styled-components";
import { breakpoints } from "../../../../appbase/utils/viewports";

export const ContainerAppHeaderSC = styled.header`
	margin: 0rem;
	padding: 3rem 1.5rem 3rem 1.5rem;
	@media ${breakpoints.lg} {
		margin: 0rem;
		padding: 1rem 1.5rem 1rem 1.5rem;
	}
`;
