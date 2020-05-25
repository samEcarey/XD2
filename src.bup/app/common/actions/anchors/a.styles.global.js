import { createGlobalStyle } from "styled-components";
import { PRIMARY_COLOR, SECONDARY_COLOR, COLOR_WHITE } from "app/constants";

export const AStyled = createGlobalStyle`
	a {
		color: ${PRIMARY_COLOR};
			-webkit-transition: color 0.2s ease-in-out;
			-moz-transition: color 0.2s ease-in-out;
			-o-transition: color 0.2s ease-in-out;
			-ms-transition: color 0.2s ease-in-out;
		text-decoration: none;
		a:active  { }
		&:visited { color: ${PRIMARY_COLOR}; }
		&:hover,
		&:focus,
		&:active  { color: ${SECONDARY_COLOR};  }
		&:hover,
		a:active  { outline: 0; }
		&:hover   { }
		&:focus   { outline: thin dotted; }

		&.button {
			color: ${COLOR_WHITE};
		}
	}
`;
