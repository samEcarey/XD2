import { createGlobalStyle } from "styled-components";

export const FontLocalStyles = createGlobalStyle`
	/* font file in public folder */
	@font-face {
		font-family: 'Quicksand';
		src: url('/Quicksand-Light.woff2') format('woff2'),
				url('/Quicksand-Light.woff') format('woff');
		font-weight: 300;
		font-style: normal;
	}
`;
