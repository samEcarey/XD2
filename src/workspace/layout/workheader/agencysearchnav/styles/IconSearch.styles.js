import styled from "styled-components";
import { Breakpoints } from "app/common";
import { WHITE_COLOR } from "app/constants"

export const IconSearchStyled = styled.svg`
	margin: 0.6rem 1.5rem 0rem 0rem;
	padding: 0;
	width: 3rem;
	height: 3rem;
	fill: ${WHITE_COLOR};
	&:hover {
		fill: ${WHITE_COLOR};
		cursor: pointer;
	}
`;

export const IconSearchLoadingStyled = styled(IconSearchStyled)``;
export const IconSearchPlaylist = styled(IconSearchStyled)``;
export const IconSearchFoundStyled = styled(IconSearchStyled)``;
