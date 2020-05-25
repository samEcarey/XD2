import { css } from "styled-components";
// import { SHADOW_COLOR, SHADOW_SIZE } from "app/data";

export const SHADOW_COLOR = "0, 0, 0";
export const SHADOW_SIZE = "2px 1px 1px";

export const SHADOW_10 = `${SHADOW_SIZE} rgba(${SHADOW_COLOR}, 1)`;
export const SHADOW_08 = `${SHADOW_SIZE} rgba(${SHADOW_COLOR}, .8)`;
export const SHADOW_06 = `${SHADOW_SIZE} rgba(${SHADOW_COLOR}, .6)`;
export const SHADOW_04 = `${SHADOW_SIZE} rgba(${SHADOW_COLOR}, .4)`;
export const SHADOW_02 = `${SHADOW_SIZE} rgba(${SHADOW_COLOR}, .2)`;

export const BOX_SHADOW = "rgba(0, 0, 0, 0.2) 0px 0 10px";

export const BOX_SHADOW_CHUNK = css`
	-webkit-box-shadow: rgba(0, 0, 0, 0.2) 0px 0 10px;
	-moz-box-shadow: rgba(0, 0, 0, 0.2) 0 0 10px;
	box-shadow: rgba(0, 0, 0, 0.2) 0 0 10px;
`;

export const FILTER_DROPSHADOW_SVG = "${SHADOW_04}";

export const FILTER_DROPSHADOW_SVG_CHUNK = css`
	-webkit-filter: drop-shadow(${SHADOW_04});
	filter: drop-shadow(${SHADOW_04});
`;

export const TEXT_SHADOW = ``;
