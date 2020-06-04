import { css } from "styled-components";
import {
	TERTIARY_COLOR,
	TERTIARY_SHADE,
	BORDER_RADIUS,
	COLOR_WHITE
} from "app/constants";

export const helperButtonTertiary = css`
	color: ${COLOR_WHITE};
	background-color: ${TERTIARY_COLOR};
	border: 0.1rem solid ${TERTIARY_COLOR};
	border-radius: ${BORDER_RADIUS};
`;

export const helperButtonTertiaryHover = css`
	color: ${COLOR_WHITE};
	background-color: ${TERTIARY_SHADE};
	border-color: ${TERTIARY_SHADE};
`;
