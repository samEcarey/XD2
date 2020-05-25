import styled from "styled-components";

// ${props => props.kind === "cancel" && "background: tomato"};
// background: ${props => (props.kind === "cancel" ? "tomato" : "indigo")};
// background: ${({ kind }) => (kind === "cancel" ? "tomato" : "green")};
// const ButtonStyles = `border: 2px solid orange;`; // ${ButtonStyles}

export const ContainerSC = styled.section`
	margin: ${props => props.margin};
	padding: ${props => props.padding};
	background-color: ${props => props.bg};
`;
