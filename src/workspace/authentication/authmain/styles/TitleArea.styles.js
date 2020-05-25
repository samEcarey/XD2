import styled from "styled-components";
import {
	PRIMARY_SHADE,
	COLOR_WHITE,
	BOX_SHADOW,
	SHADOW_10,
	FILTER_DROPSHADOW_SVG_CHUNK
} from "app/constants";

export const StyledTitleArea = styled.figure`
	margin-bottom: 3rem;
	padding: 0rem;
	svg {
		display: block;
		margin: 0rem auto 0rem auto;
		min-width: 20rem;
		max-width: 20rem;
		fill: ${COLOR_WHITE};
		${FILTER_DROPSHADOW_SVG_CHUNK}
		path {
		}
		/* background: green; */
	}
	/* background: red; */
`;
