import { createGlobalStyle } from "styled-components";
import { MEDIUM_TINT } from "app/constants";

export const HRStyles = createGlobalStyle`
	border: 0;
	border-top: 1px solid ${MEDIUM_TINT};
	margin: 3rem 0;
`;
