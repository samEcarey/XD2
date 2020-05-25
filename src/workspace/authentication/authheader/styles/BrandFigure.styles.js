import styled from "styled-components";
import { PRIMARY_COLOR } from "app/data";
import { COLOR_WHITE } from "app/data";

export const StyledBrandFigure = styled.figure`
	margin-bottom: 1.5rem;
	svg {
		vertical-align: top;
		fill: ${COLOR_WHITE};
		min-width: 4rem;
		max-width: 4rem;
		/* background: blue; */
	}
	/* background: red; */
`;
