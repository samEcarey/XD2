import styled from "styled-components";
import { Breakpoints } from "app/common"
import { PRIMARY_TINT, WHITE_COLOR } from "app/constants"

export const DashboardLeftStyled = styled.div`
	border: 1px solid ${PRIMARY_TINT};
	border-radius: 1rem; 
	color: ${WHITE_COLOR};
	margin-bottom: 2rem;
	@media ${Breakpoints.ml} {
		margin-right: 2rem;
		margin-bottom: 0rem;
	}
`;
