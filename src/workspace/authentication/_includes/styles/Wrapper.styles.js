import styled from "styled-components";
import { BOX_SHADOW } from "app/constants";

export const StyledWrapper = styled.section`
	@media (min-width: 640px) {
		/* border-radius */
		-webkit-border-radius: 20px;
		-moz-border-radius: 20px;
		border-radius: 20px;
		/* box-shadow */
		${BOX_SHADOW}
	}
`;
