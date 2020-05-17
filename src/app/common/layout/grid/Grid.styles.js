import styled from "styled-components";

export const GridStyled = styled.section``;

// ${props => props.kind === "cancel" && "background: tomato"};
// background: ${props => (props.kind === "cancel" ? "tomato" : "indigo")};
// background: ${({ kind }) => (kind === "cancel" ? "tomato" : "green")};
// const ButtonStyles = `border: 2px solid orange;`; // ${ButtonStyles}

// ${({ size }) => {
// 	if (size === "xs") {
// 		return `padding: 0 .5rem; height: 1.8rem; line-height: 1.8rem; font-size: .5rem;`;
// 	} else if (size === "sm") {
// 		return `padding: 0 1.5rem; height: 2.8rem; line-height: 2.8rem; font-size: .8rem;`;
// 	} else {
// 		return null;
// 	}
// }}
