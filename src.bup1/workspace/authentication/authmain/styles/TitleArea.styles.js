import styled from "styled-components";
import {
	PRIMARY_COLOR,
	COLOR_WHITE,
	BOX_SHADOW,
	SHADOW_10,
	FILTER_DROPSHADOW_SVG_CHUNK,
	FILTER_DROPSHADOW_SVG_CHUNK_ZERO
} from "app/constants";

export const StyledTitleArea = styled.figure`
	margin: 0rem 0rem 3rem 0rem;
	@media (min-width: 768px) {
		margin: 6rem 0rem 3rem 0rem;
	}
	padding: 0rem;
	svg {
		display: block;
		margin: 0rem auto 0rem auto;
		min-width: 24rem;
		max-width: 24rem;
		@media (min-width: 768px) {
			min-width: 20rem;
			max-width: 20rem;
		}
		fill: ${COLOR_WHITE};
		${FILTER_DROPSHADOW_SVG_CHUNK}
		@media (min-width: 768px) {
			fill: ${PRIMARY_COLOR};
			${FILTER_DROPSHADOW_SVG_CHUNK_ZERO}
		}
		/* background: green; */
	}
	/* background: red; */
`;
