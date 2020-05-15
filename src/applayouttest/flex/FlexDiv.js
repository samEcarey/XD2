import styled from "styled-components";
// import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../../appdata";

// ${props => props.pill === true && "border-radius: 16px;"};
// ${props => props.kind === "cancel" && "background: tomato"};
// background: ${props => (props.kind === "cancel" ? "tomato" : "indigo")};
// background: ${({ kind }) => (kind === "cancel" ? "tomato" : "green")};
// const ButtonStyles = `border: 2px solid orange;`; // ${ButtonStyles}

export const FlexDiv = styled.div`
	display: flex;

	flex-direction: row;
	${({ direction }) => {
		if (direction === "column") {
			return `flex-direction: column;`;
		} else if (direction === "column-reverse") {
			return `flex-direction: column-reverse;`;
		} else if (direction === "row-reverse") {
			return `flex-direction: row-reverse;`;
		} else {
			return `flex-direction: row;`;
		}
	}};

	justify-content: flex-start;
	${({ justifyContent }) => {
		if (justifyContent === "flex-end") {
			return `justify-content: flex-end;`;
		} else if (justifyContent === "center") {
			return `justify-content: center;`;
		} else if (justifyContent === "space-between") {
			return `justify-content: space-between;`;
		} else if (justifyContent === "space-around") {
			return `justify-content: space-around;`;
		} else {
			return `justify-content: flex-start;`;
		}
	}};

	flex-wrap: nowrap;
	align-items: center;
	align-content: center;
`;

export const FlexDiv2 = styled(FlexDiv)`
	background: #232323;
	padding: 3rem;
	svg {
		margin-right: 1rem;
	}
`;
