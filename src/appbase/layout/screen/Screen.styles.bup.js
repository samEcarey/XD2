import styled from "styled-components";
import { DARK_COLOR } from "../../../appdata";
import { FlexColCenter } from "../../utils";

export const ScreenStyled = styled.section`
	padding: 1.5rem;
	background-color: ${DARK_COLOR};

	${({ type }) => {
		if (type === "website") {
			return `
				background-color: green;
			`;
		}
	}}

	${({ type }) => {
		if (type === "auth") {
			return `
				${FlexColCenter}
				height: 100vh;
				h1 {
					text-align: center;
				}
			`;
		}
	}}

	${({ type }) => {
		if (type === "workspace") {
			return `
				background-color: red;
			`;
		}
	}}
`;
