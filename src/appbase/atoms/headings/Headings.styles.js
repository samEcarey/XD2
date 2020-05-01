import styled from "styled-components";
import { GLOBAL_FONT_WEIGHT, GLOBAL_LETTER_SPACING } from "../../../appdata";

const HEADINGS_MARGIN = "0rem 0rem 1.5rem 0rem";

export const StyledH1 = styled.h1`
	margin: ${HEADINGS_MARGIN};
	font-weight: ${GLOBAL_FONT_WEIGHT};
	letter-spacing: ${GLOBAL_LETTER_SPACING};

	font-size: 4.6rem;
	line-height: 1.2;
`;

export const StyledH2 = styled.h2`
	margin: ${HEADINGS_MARGIN};
	font-weight: ${GLOBAL_FONT_WEIGHT};
	letter-spacing: ${GLOBAL_LETTER_SPACING};

	font-size: 3.6rem;
	line-height: 1.25;
`;

export const StyledH3 = styled.h3`
	margin: ${HEADINGS_MARGIN};
	font-weight: ${GLOBAL_FONT_WEIGHT};
	letter-spacing: ${GLOBAL_LETTER_SPACING};

	font-size: 2.8rem;
	line-height: 1.3;
`;

export const StyledH4 = styled.h4`
	margin: ${HEADINGS_MARGIN};
	font-weight: ${GLOBAL_FONT_WEIGHT};
	letter-spacing: ${GLOBAL_LETTER_SPACING};

	font-size: 2.2rem;
	letter-spacing: -0.08rem;
	line-height: 1.35;
`;

export const StyledH5 = styled.h5`
	margin: ${HEADINGS_MARGIN};
	font-weight: ${GLOBAL_FONT_WEIGHT};
	letter-spacing: ${GLOBAL_LETTER_SPACING};

	font-size: 1.8rem;
	letter-spacing: -0.05rem;
	line-height: 1.5;
`;

export const StyledH6 = styled.h6`
	margin: ${HEADINGS_MARGIN};
	font-weight: ${GLOBAL_FONT_WEIGHT};
	letter-spacing: ${GLOBAL_LETTER_SPACING};

	font-size: 1.6rem;
	letter-spacing: 0;
	line-height: 1.4;
`;
