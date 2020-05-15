import styled from "styled-components";
import { breakpoints } from "../../../../../../appbase/utils/viewports/Viewports";

export const IconSearchStyled = styled.svg`
	/* display: block; */
	margin: 0.6rem 1.5rem 0rem 0rem;
	padding: 0;
	width: 3rem;
	height: 3rem;
	/* fill: currentColor; */
	fill: rgba(26, 29, 31, 0.4);
	&:hover {
		fill: rgba(26, 29, 31, 0.6);
		cursor: pointer;
	}
`;

export const IconSearchLoadingStyled = styled(IconSearchStyled)``;
export const IconSearchPlaylist = styled(IconSearchStyled)``;
export const IconSearchFoundStyled = styled(IconSearchStyled)``;
