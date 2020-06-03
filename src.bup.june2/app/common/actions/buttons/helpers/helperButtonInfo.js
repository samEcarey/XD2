import { css } from "styled-components";
import {
	INFO_COLOR,
	INFO_SHADE,
	BORDER_RADIUS,
	COLOR_WHITE
} from "app/constants";

export const helperButtonInfo = css`
	color: ${COLOR_WHITE};
	background-color: ${INFO_COLOR};
	border: 0.1rem solid ${INFO_COLOR};
	border-radius: ${BORDER_RADIUS};
`;

export const helperButtonInfoHover = css`
	color: ${COLOR_WHITE};
	background-color: ${INFO_SHADE};
	border-color: ${INFO_SHADE};
`;
