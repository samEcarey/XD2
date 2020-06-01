import { css } from "styled-components";
import {
	SUCCESS_COLOR,
	SUCCESS_SHADE,
	SUCCESS_TINT,
	BORDER_RADIUS,
	COLOR_WHITE
} from "app/constants";

export const helperButtonSuccess = css`
	color: ${COLOR_WHITE};
	background-color: ${SUCCESS_COLOR};
	border: 0.1rem solid ${SUCCESS_COLOR};
	border-radius: ${BORDER_RADIUS};
`;

export const helperButtonSuccessHover = css`
	color: ${COLOR_WHITE};
	background-color: ${SUCCESS_SHADE};
	border-color: ${SUCCESS_SHADE};
`;
