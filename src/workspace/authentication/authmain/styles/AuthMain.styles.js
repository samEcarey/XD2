import styled from "styled-components";
import { PRIMARY_SHADE, COLOR_WHITE } from "app/data";
import { BORDER_RADIUS } from "app/constants";

export const StyledAuthMain = styled.main`
	margin: 0rem;
	padding: 1.5rem 0rem 0rem 0rem;
	color: ${COLOR_WHITE};
	border-bottom-right-radius: ${BORDER_RADIUS};
	border-bottom-left-radius: ${BORDER_RADIUS};
	@media (min-width: 768px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
		align-items: center;
		padding: 0rem 3rem 0rem 3rem;
		color: ${PRIMARY_SHADE};
		background: ${COLOR_WHITE};
		border-top-right-radius: ${BORDER_RADIUS};
		border-bottom-left-radius: 0rem;
	}
`;
