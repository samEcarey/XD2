import { css } from "styled-components";
import {
	SECONDARY_COLOR,
	SECONDARY_SHADE,
	BORDER_RADIUS,
	COLOR_WHITE
} from "app/constants";

// 	${helperButton}
// ${helperButtonHover}
export const helperButtonSecondary = css`
	color: ${COLOR_WHITE};
	background-color: ${SECONDARY_COLOR};
	border: 0.1rem solid ${SECONDARY_COLOR};
	border-radius: ${BORDER_RADIUS};
`;

export const helperButtonSecondaryHover = css`
	color: ${COLOR_WHITE};
	background-color: ${SECONDARY_SHADE};
	border-color: ${SECONDARY_SHADE};
`;
