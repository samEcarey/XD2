import styled from "styled-components";
import { Breakpoints } from "app/common";

export const HoverMaxIconStyled = styled.div`
	display: none;
	button {
		color: WHITE;
	}
	@media ${Breakpoints.lg} {
		display: block;
	}
`;
