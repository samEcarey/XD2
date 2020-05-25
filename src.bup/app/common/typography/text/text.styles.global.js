import { createGlobalStyle } from "styled-components";

const TEXT_MARGIN = "0rem 0rem 1.5rem 0rem";

export const TextStyles = createGlobalStyle`
	p {
			margin: ${TEXT_MARGIN};
		&:last-of-type {
			margin-bottom: 0rem;
		}
	}

	b {
		font-weight: bold;
	}

	em {

	}

	strong {
		font-weight: bold;
	}
`;
