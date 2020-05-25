import { css } from "styled-components";
import { MEDIUM_COLOR, MEDIUM_TINT } from "app/constants";

export const helperButtonDisabled = css`
	cursor: default;
	opacity: 0.5;
	color: ${MEDIUM_COLOR};
	background: ${MEDIUM_TINT};
	border-color: ${MEDIUM_COLOR};
`;

export const helperButtonDisabledHover = css`
	cursor: pointer;
	opacity: 0.5;
	color: ${MEDIUM_COLOR};
	background: ${MEDIUM_TINT};
	border-color: ${MEDIUM_COLOR};
`;
