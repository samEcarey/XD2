import styled from "styled-components";
import { Button } from "./Button";

export const StyledButton = styled.button`
	/* ${props => props.pill === true && "border-radius: 16px;"}; */
	/* ${props => props.fullwidth === true && "display: block;"}; */
`;

// Testing extending/inheritting, it works
export const ButtonMario = styled(Button)`
	color: white;
	background-color: purple;
	border: 0.1rem solid purple;
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
