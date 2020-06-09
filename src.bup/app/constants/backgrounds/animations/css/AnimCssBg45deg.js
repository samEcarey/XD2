import { css } from "styled-components";
import {
	PRIMARY_COLOR,
	PRIMARY_SHADE,
	PRIMARY_TINT,
	SECONDARY_COLOR,
	SECONDARY_SHADE,
	SECONDARY_TINT
} from "app/data";

// Different one: https://codepen.io/jayjoomler/pen/WXgwvx

export const AnimCssBg45deg = css`
	background: linear-gradient(
		-45deg,
		${PRIMARY_COLOR},
		${PRIMARY_TINT},
		${SECONDARY_SHADE},
		${PRIMARY_SHADE}
	);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;

	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
`;

export const AnimCssBg45degColors = css`
	background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;

	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
`;
