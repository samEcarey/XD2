import { css } from "styled-components";
import {
	MEDIUM_COLOR,
	MEDIUM_SHADE,
	MEDIUM_TINT,
	BORDER_RADIUS,
	COLOR_WHITE
} from "app/constants";

export const helperButtonMedium = css`
	color: ${COLOR_WHITE};
	background-color: ${MEDIUM_COLOR};
	border: 0.1rem solid ${MEDIUM_COLOR};
	border-radius: ${BORDER_RADIUS};
`;

export const helperButtonMediumHover = css`
	color: ${COLOR_WHITE};
	background-color: ${MEDIUM_SHADE};
	border-color: ${MEDIUM_SHADE};
`;
