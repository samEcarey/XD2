import { css } from "styled-components";
import {
	WARNING_COLOR,
	WARNING_SHADE,
	WARNING_TINT,
	BORDER_RADIUS,
	COLOR_WHITE
} from "app/constants";

export const helperButtonWarning = css`
	color: ${COLOR_WHITE};
	background-color: ${WARNING_COLOR};
	border: 0.1rem solid ${WARNING_COLOR};
	border-radius: ${BORDER_RADIUS};
`;

export const helperButtonWarningHover = css`
	color: ${COLOR_WHITE};
	background-color: ${WARNING_SHADE};
	border-color: ${WARNING_SHADE};
`;
