import styled from "styled-components";

// ${props => props.kind === "cancel" && "background: tomato"};
// background: ${props => (props.kind === "cancel" ? "tomato" : "indigo")};
// background: ${({ kind }) => (kind === "cancel" ? "tomato" : "green")};
// const ButtonStyles = `border: 2px solid orange;`; // ${ButtonStyles}

export const Button = styled.button`
	${({ size }) => {
		if (size === "xs") {
			return `padding: 0 .5rem; height: 1.8rem; line-height: 1.8rem; font-size: .5rem;`;
		} else if (size === "sm") {
			return `padding: 0 1.5rem; height: 2.8rem; line-height: 2.8rem; font-size: .8rem;`;
		} else if (size === "md") {
			return `padding: 0 2rem; height: 3.8rem; line-height: 3.8rem; font-size: 1.1rem;`;
		} else if (size === "lg") {
			return `padding: 0 2.5rem; height: 4.5rem; line-height: 4.5rem; font-size: 1.4rem;`;
		} else {
			return null;
		}
	}}
	${props => props.pill === true && "border-radius: 16px;"};
`;

export const ButtonDanger = styled(Button)`
	color: white;
	background-color: red;
	border: 0.1rem solid red;
`;

export const ButtonCancel = styled(Button)``;

export const ButtonDisabled = styled(Button)``;

export const ButtonSubmit = styled(Button)``;

export const ButtonReset = styled(Button)``;
