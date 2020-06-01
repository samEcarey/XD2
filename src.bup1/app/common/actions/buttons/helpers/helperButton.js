import { css } from "styled-components";
import {
	PRIMARY_COLOR,
	PRIMARY_TINT,
	BORDER_RADIUS,
	COLOR_WHITE
} from "app/constants";

export const helperButton = css`
	display: inline-block;
	margin-bottom: 1rem;

	/*** Original Milligram styles */
	/* padding: 0 3rem; */
	/* height: 3.8rem; */
	/* line-height: 3.8rem; */
	/* font-size: 1.1rem; */

	/*** SIZES prop in Button.styles.js */
	padding: 0 1.5rem;
	height: 2.8rem;
	line-height: 2.8rem;
	font-size: 0.8rem;

	/*** Also used in Pill.list-style-position.js */
	/*** move this to varient */
	font-weight: 700;
	letter-spacing: 0.1rem;
	text-align: center;
	text-decoration: none;
	text-transform: uppercase;
	white-space: nowrap;

	cursor: pointer;
	color: ${COLOR_WHITE};
	background-color: ${PRIMARY_COLOR};
	border: 0.1rem solid ${PRIMARY_COLOR};
	border-radius: ${BORDER_RADIUS};
`;

export const helperButtonHover = css`
	outline: 0;
	color: ${COLOR_WHITE};
	background-color: ${PRIMARY_TINT};
	border-color: ${PRIMARY_TINT};
`;
