import { createGlobalStyle } from "styled-components";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../../appdata";

export const AnchorsStyles = createGlobalStyle`
	a {
		color: ${PRIMARY_COLOR};
		text-decoration: none;
		&:focus,
		&:hover {
			color: ${SECONDARY_COLOR};
		}
	}
`;
