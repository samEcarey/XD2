import styled from "styled-components";
import { PRIMARY_COLOR } from "app/data";
import { BORDER_RADIUS } from "app/constants";

export const StyledAuthHeader = styled.header`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
	align-items: center;

	margin: 0rem;
	padding: 1.5rem;
	color: white;
	text-align: center;
	background-color: TRANSPARENT;
	background-color: ${PRIMARY_COLOR};
	border-top-right-radius: ${BORDER_RADIUS};
	border-top-left-radius: ${BORDER_RADIUS};
	@media (min-width: 768px) {
		border-top-right-radius: 0rem;
		border-top-left-radius: 3rem;
		border-bottom-left-radius: 3rem;
	}
	h1 {
	}
	p {
		text-shadow: 2px 1px 1px rgba(0, 0, 0, 1);
	}
	.brand-area,
	.tagline,
	.value-proposition {
		@media (min-width: 1280px) {
			display: none;
		}
	}
	figure.authheader-illustration {
		display: none;
		@media (min-width: 1280px) {
			display: block;
			svg {
				width: 400px;
			}
		}
	}
`;
