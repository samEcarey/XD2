import { css } from "styled-components";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "app/constants";

export const helperButtonClear = css`
	color: ${PRIMARY_COLOR};
	background-color: transparent;
	border-color: transparent;
`;

export const helperButtonClearHover = css`
	color: ${SECONDARY_COLOR};
	background-color: transparent;
	border-color: transparent;
`;

export const helperButtonClearHoverDisabled = css`
	color: ${PRIMARY_COLOR};
`;
