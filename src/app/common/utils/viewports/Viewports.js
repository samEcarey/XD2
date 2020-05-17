import { XS, SM, MD, ML, LG, XL } from "./helpers";

export const breakpoints = {
	//** Mobile First
	none: "width: 100%",
	xs: `(min-width: ${XS}px)`,
	sm: `(min-width: ${SM}px)`,
	md: `(min-width: ${MD}px)`,
	ml: `(min-width: ${ML}px)`,
	lg: `(min-width: ${LG}px)`,
	xl: `(min-width: ${XL}px)`,

	mobile: `(min-width: ${SM}px)`,
	tablet: `(min-width: ${MD}px)`,
	laptop: `(min-width: ${LG}px)`,
	desktop: `(min-width: ${XL}px)`,

	xlMax: `(min-width: ${XL - 1}px)`,
	lgMax: `(min-width: ${LG - 1}px)`,
	mlMax: `(min-width: ${ML - 1}px)`,
	mdMax: `(min-width: ${MD - 1}px)`,
	smMax: `(min-width: ${SM - 1}px)`,
	xsMax: `(min-width: ${XS - 1}px)`
};

// Usage:
// @media ${Breakpoints.md} { background-color: red; }

// console.log("Breakpoints smMax", breakpoints.smMax);
