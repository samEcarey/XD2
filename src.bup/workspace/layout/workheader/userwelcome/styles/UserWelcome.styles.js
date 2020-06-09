import styled from "styled-components";
import { Breakpoints } from "app/common";
import { PRIMARY_TINT, COLOR_WHITE, WHITE_COLOR, GREY_400, GREY_700, GREY_950 } from "app/constants";

export const UserWelcomeStyled = styled.div`
	display: none;
	
	@media ${Breakpoints.lg} {
		display: flex;
	}
`;
