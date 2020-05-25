import styled from "styled-components";
import { BOX_SHADOW } from "app/constants";

export const StyledWrapper = styled.section`
	@media (min-width: 992px) {
		/* border-radius */
		-webkit-border-radius: 20px;
		-moz-border-radius: 20px;
		border-radius: 20px;
		/* box-shadow */
		-webkit-box-shadow: ${BOX_SHADOW};
		-moz-box-shadow: ${BOX_SHADOW};
		box-shadow: ${BOX_SHADOW};
	}
	margin: 0rem auto 0rem auto;
	width: 80%;

	.Authentication-header {
		display: none;
		@media (min-width: 768px) {
			display: flex;
		}
	}
`;
