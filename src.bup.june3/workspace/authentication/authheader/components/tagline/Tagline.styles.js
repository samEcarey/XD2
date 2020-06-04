import styled from "styled-components";
import { SHADOW_10 } from "app/constants";

export const StyledTagline = styled.div`
	margin: 0rem auto 1.5rem auto;
	width: 18rem;
	.tag-top,
	.tag-bottom {
		font-size: 2rem;
		font-family: "Open Sans", sans-serif;
		font-weight: 900;
		font-style: italic;
		/* padding: 0 2.5rem; */
		/* line-height: 5.8rem; */
		text-transform: uppercase;
		text-shadow: ${SHADOW_10};
	}
	.tag-top {
		color: WHITE;
		sup {
			position: absolute;
			vertical-align: baseline;
			font-size: 2.2rem;
			left: 33rem;
			top: -0.4em;
		}
	}
	.tag-bottom {
		color: #2fa1cc;
	}
	.hr {
		height: 0.3rem;
		background-image: linear-gradient(
			to right,
			rgba(47, 161, 204, 1),
			rgba(47, 161, 204, 1),
			rgba(47, 161, 204, 1),
			rgba(255, 255, 255, 1),
			rgba(47, 161, 204, 1)
		);
		box-shadow: ${SHADOW_10};
	}
`;
