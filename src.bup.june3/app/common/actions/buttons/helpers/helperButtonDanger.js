import { css } from "styled-components";
import {
	DANGER_COLOR,
	DANGER_SHADE,
	DANGER_TINT,
	BORDER_RADIUS,
	COLOR_WHITE
} from "app/constants";

export const helperButtonDanger = css`
	color: ${COLOR_WHITE};
	background-color: ${DANGER_COLOR};
	border: 0.1rem solid ${DANGER_COLOR};
	border-radius: ${BORDER_RADIUS};
`;

export const helperButtonDangerHover = css`
	color: ${COLOR_WHITE};
	background-color: ${DANGER_SHADE};
	border-color: ${DANGER_SHADE};
`;
