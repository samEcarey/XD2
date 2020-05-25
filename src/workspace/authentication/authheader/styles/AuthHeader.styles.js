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
	border-top-right-radius: ${BORDER_RADIUS};
	border-top-left-radius: ${BORDER_RADIUS};
	@media (min-width: 640px) {
		border-top-right-radius: 0rem;
		border-bottom-left-radius: ${BORDER_RADIUS};
	}
	h1 {
	}
	p {
		text-shadow: 2px 1px 1px rgba(0, 0, 0, 1);
	}
		background-color: ${PRIMARY_COLOR};
	}
`;
