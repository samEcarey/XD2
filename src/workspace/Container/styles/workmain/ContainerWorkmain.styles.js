import styled from "styled-components";
import { Breakpoints } from "app/common";
import { PRIMARY_COLOR } from "app/constants"

export const ContainerWorkmainSC = styled.main`
	background-color: ${PRIMARY_COLOR};
	overflow-y: auto;
	overflow-x: hidden;
	height: calc(100vh - 8rem);
	@media ${Breakpoints.sm} {
		
	}
	
`;
