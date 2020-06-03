import styled from "styled-components";
import { Breakpoints } from "app/common";
import { PRIMARY_COLOR } from "app/constants"

export const ContainerWorkmainSC = styled.main`
	height: 100%;
	background-color: ${PRIMARY_COLOR};
	@media ${Breakpoints.sm} {
		overflow-y: auto;
		overflow-x: hidden;
		height: calc(100vh - 8rem);
	}
	
`;
