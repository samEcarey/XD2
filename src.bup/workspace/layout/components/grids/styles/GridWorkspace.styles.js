import styled from "styled-components";
import { Breakpoints } from "app/common";

export const GridWorkspaceSC = styled.section`
	display: grid;
	grid-template-columns: 1fr;
	grid-auto-rows: min-content auto;
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	height: 100%;
	width: 100%;
	@media ${Breakpoints.xl} {
		overflow: hidden;
		height: 100vh;
	}
`;
