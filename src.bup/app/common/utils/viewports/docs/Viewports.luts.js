import { css } from "styled-components";

//** Use */
// import { vpMinWidth, vpMaxWidth } from '../utilities'
// 	${ViewportAbove.sm`color: green;`}

const mediaqueries = {
	none: "width: 100%",
	sm: "max-width: 640px",
	md: "max-width: 768px",
	lg: "max-width: 1024px",
	xl: "max-width: 1280px"
};

// acc = accumulator - ViewportAbove (mobile first)
export const vpMinWidth = Object.keys(mediaqueries).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (min-width: ${mediaqueries[label]}px) {
			${css(...args)}
		}
	`;
	return acc;
}, {});

export const vpMaxWidth = Object.keys(mediaqueries).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (max-width: ${mediaqueries[label]}px) {
			${css(...args)}
		}
	`;
	return acc;
}, {});
