import styled from "styled-components";
import { Breakpoints } from "app/common";

export const HoverMaxIconStyled = styled.div`
	display: none;
	@media ${Breakpoints.lg} {
		display: block;
	}
`;
