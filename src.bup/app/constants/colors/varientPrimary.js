import { css } from "styled-components";
import {
	PRIMARY_COLOR,
	PRIMARY_SHADE,
	PRIMARY_TINT,
	BORDER_RADIUS,
	COLOR_WHITE
} from "app/constants";

export const varientPrimary = css`
	color: ${COLOR_WHITE};
	background-color: ${PRIMARY_COLOR};
	border: 0.1rem solid ${PRIMARY_COLOR};
	border-radius: ${BORDER_RADIUS};
`;

export const varientPrimaryShade = css`
	color: ${COLOR_WHITE};
	background-color: ${PRIMARY_SHADE};
	border-color: ${PRIMARY_SHADE};
	border-radius: ${BORDER_RADIUS};
`;

export const varientPrimaryTint = css`
	color: ${COLOR_WHITE};
	background-color: ${PRIMARY_TINT};
	border-color: ${PRIMARY_TINT};
	border-radius: ${BORDER_RADIUS};
`;
