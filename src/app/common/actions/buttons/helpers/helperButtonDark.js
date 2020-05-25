import { css } from "styled-components";
import {
	DARK_COLOR,
	DARK_SHADE,
	DARK_TINT,
	BORDER_RADIUS,
	COLOR_WHITE
} from "app/constants";

export const helperButtonDark = css`
	color: ${COLOR_WHITE};
	background-color: ${DARK_COLOR};
	border: 0.1rem solid ${DARK_COLOR};
	border-radius: ${BORDER_RADIUS};
`;

export const helperButtonDarkHover = css`
	color: ${COLOR_WHITE};
	background-color: ${DARK_SHADE};
	border-color: ${DARK_SHADE};
`;
