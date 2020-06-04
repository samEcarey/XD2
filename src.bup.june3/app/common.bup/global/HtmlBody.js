import { createGlobalStyle } from "styled-components";
import { PRIMARY_SHADE } from "app/data";

export const HtmlBodyStyles = createGlobalStyle`
	*,
	*:after,
	*:before { box-sizing: inherit; }

	html { box-sizing: border-box; }

	body {
		/* overflow:hidden; */ 
		background-color: ${PRIMARY_SHADE}
		}
	
`;
