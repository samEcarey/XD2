import styled from "styled-components";
import { Breakpoints } from "app/common"
import { PRIMARY_SHADE, PRIMARY_COLOR, PRIMARY_TINT,SECONDARY_COLOR, WHITE_COLOR, GREY_500, GREY_700, SUCCESS_SHADE, DANGER_COLOR } from "app/constants"

export const ModuleMainStyled = styled.div`
	display: grid;
	margin: 2rem 0rem;
	@media ${Breakpoints.ml} {
		grid-template-columns: 1fr 300px;
	}
`;
