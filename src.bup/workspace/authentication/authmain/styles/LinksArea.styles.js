import styled from "styled-components";
import { PRIMARY_COLOR, SECONDARY_COLOR, COLOR_WHITE } from "app/constants";

export const StyledLinksArea = styled.nav`
	margin-bottom: 4.5rem;
	@media (min-width: 768px) {
		margin-bottom: 1.5rem;
	}
	ul {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-content: center;
		align-items: center;
		margin: 0rem 0rem 0rem 0rem;
		padding: 0rem 0rem 0rem 0rem;
		li {
			margin: 0rem 0rem 0rem 0rem;
			padding: 0rem 0rem 0rem 0rem;
			@media (min-width: 768px) {
				margin: 0rem 2rem 0rem 2rem;
			}
			a {
				font-size: 1.4rem;
				@media (min-width: 768px) {
					font-size: 1rem;
				}
				color: ${SECONDARY_COLOR} !important;
				&:hover {
					color: ${COLOR_WHITE} !important;
					@media (min-width: 768px) {
						color: ${PRIMARY_COLOR} !important;
					}
				}
			}
		}
	}
`;
