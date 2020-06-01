import styled from "styled-components";
import { PRIMARY_COLOR } from "app/constants"

export const ContainerWorkmainSC = styled.main`
	overflow-y: auto;
	overflow-x: hidden;
	height: calc(100vh - 75px);
	background-color: ${PRIMARY_COLOR};
	@media (min-width: 1280px) {
	}
	
`;
