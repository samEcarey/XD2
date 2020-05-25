import { css } from "styled-components";
import {
	PRIMARY_COLOR,
	SECONDARY_COLOR,
	MEDIUM_COLOR,
	MEDIUM_TINT
} from "app/constants";

export const helperButtonOutlined = css`
	background-color: transparent;
	color: ${PRIMARY_COLOR};
`;

export const helperButtonOutlinedHover = css`
	color: ${SECONDARY_COLOR};
	background-color: transparent;
	border-color: ${SECONDARY_COLOR};
`;

export const helperButtonOutlinedDisabled = css`
	cursor: default;
	opacity: 0.5;
	color: ${MEDIUM_COLOR};
	background: ${MEDIUM_TINT};
	border-color: ${MEDIUM_COLOR};
`;

export const helperButtonOutlinedDisabledHover = css`
	cursor: pointer;
	opacity: 0.5;
	color: ${MEDIUM_COLOR};
	background: ${MEDIUM_TINT};
	border-color: ${MEDIUM_COLOR};
`;
