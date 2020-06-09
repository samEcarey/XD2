import styled from "styled-components";
import { WHITE_COLOR } from "app/constants";
import { Breakpoints } from "app/common";

export const MaxViewIconStyled = styled.svg`
	width: 2rem;
	height: 2rem;
	fill: ${WHITE_COLOR};
	&:hover {
		fill:  ${WHITE_COLOR};
		cursor: pointer;
	}
`;
