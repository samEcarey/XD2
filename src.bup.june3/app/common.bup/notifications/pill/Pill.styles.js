import styled from "styled-components";
import { COLOR_WHITE, PRIMARY_COLOR, BORDER_RADIUS_PILL } from "app/constants";

export const StyledPill = styled.span`
	/*** Make VARIENTS File for font sizes to match Button, A, Badges, etc */
	font-weight: 700;
	letter-spacing: 0.1rem;
	text-align: center;
	text-decoration: none;
	text-transform: uppercase;
	white-space: nowrap;
	color: ${COLOR_WHITE};
	background-color: ${PRIMARY_COLOR};
	${props =>
		props.outline === true &&
		`color: ${PRIMARY_COLOR}; background-color: ${COLOR_WHITE}; border: 1px solid ${PRIMARY_COLOR}`};
	border-radius: ${props =>
		props.rounded === false ? `` : `${BORDER_RADIUS_PILL}`};

	${({ size }) => {
		if (size === "xs") {
			return `padding: 0.3rem 1rem; height: 1.8rem; line-height: 1.8rem; font-size: .5rem;`;
		} else if (size === "sm") {
			return `padding: 0.4rem 1rem; height: 2.4rem; line-height: 2.4rem; font-size: .7rem;`;
		} else if (size === "reg") {
			return `padding: 0.5rem 1.2rem; height: 2.8rem; line-height: 2.8rem; font-size: 0.8rem;`;
		} else if (size === "md") {
			return `padding: 0.5rem 1.4rem; height: 3.8rem; line-height: 3.8rem; font-size: 1.1rem;`;
		} else if (size === "lg") {
			return `padding: 0.5rem 1.6rem; height: 4.5rem; line-height: 4.5rem; font-size: 1.4rem;`;
		} else {
			return `
				padding: 0.5rem 1.5rem;
				height: 2.8rem;
				line-height: 2.8rem;
				font-size: 0.8rem;
			`;
		}
	}}
`;

// ${props => props.kind === "cancel" && "background: tomato"};
// background: ${props => (props.kind === "cancel" ? "tomato" : "indigo")};
// background: ${({ kind }) => (kind === "cancel" ? "tomato" : "green")};
// const ButtonStyles = `border: 2px solid orange;`; // ${ButtonStyles}

// ${({ size }) => {
// 	if (size === "xs") {
// 		return `padding: 0 .5rem; height: 1.8rem; line-height: 1.8rem; font-size: .5rem;`;
// 	} else if (size === "sm") {
// 		return `padding: 0 1rem; height: 2.4rem; line-height: 2.4rem; font-size: .8rem;`;
// 	} else if (size === "md") {
// 		return `padding: 0 2rem; height: 3.8rem; line-height: 3.8rem; font-size: 1.1rem;`;
// 	} else if (size === "lg") {
// 		return `padding: 0 2.5rem; height: 4.5rem; line-height: 4.5rem; font-size: 1.4rem;`;
// 	} else {
// 		return "";
// 	}
// }}
