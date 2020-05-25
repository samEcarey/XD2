import { css } from "styled-components";
import {
	LIGHT_COLOR,
	LIGHT_SHADE,
	LIGHT_TINT,
	DARK_COLOR,
	BORDER_RADIUS,
	COLOR_WHITE
} from "app/constants";

export const helperButtonLight = css`
	color: ${DARK_COLOR};
	background-color: ${LIGHT_COLOR};
	border: 0.1rem solid ${LIGHT_COLOR};
	border-radius: ${BORDER_RADIUS};
`;

export const helperButtonLightHover = css`
	color: ${DARK_COLOR};
	background-color: ${LIGHT_SHADE};
	border-color: ${LIGHT_SHADE};
`;
