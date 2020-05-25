import { createGlobalStyle } from "styled-components";
import { GLOBAL_FONT_WEIGHT, GLOBAL_LETTER_SPACING } from "app/data";

const HEADINGS_MARGIN = "0rem 0rem 1.5rem 0rem";

export const HeadingsStyles = createGlobalStyle`
	h1, h2, h3, h4, h5, h6 {
		margin: ${HEADINGS_MARGIN};
		font-weight: ${GLOBAL_FONT_WEIGHT};
		letter-spacing: ${GLOBAL_LETTER_SPACING};
	}

	h1 {
		margin-bottom: 0rem;
		font-size: 4.6rem;
		line-height: 1.2;
	}

	h2 {
		font-size: 3.6rem;
		line-height: 1.25;
	}

	h3 {
		font-size: 2.8rem;
		line-height: 1.3;
	}

	h4 {
		font-size: 2.2rem;
		letter-spacing: -0.08rem;
		line-height: 1.35;
	}

	h5 {
	font-size: 1.8rem;
	letter-spacing: -0.05rem;
	line-height: 1.5;
	}

	h6 {
		font-size: 1.6rem;
		letter-spacing: 0;
		line-height: 1.4;
	}
`;
