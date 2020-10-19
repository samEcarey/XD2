import styled from "styled-components";
import { COLOR_WHITE } from "app/data";

export const StyledVP = styled.div`
	div {
		margin: 0rem auto 1.5rem auto;
		width: 26rem;
		p {
			color: ${COLOR_WHITE};
		}
	}
	small {
		display: block;
		margin: 0rem auto 0rem auto;
		width: 18rem;
		p {
			color: ${COLOR_WHITE};
			font-size: 0.8rem;
			line-height: 1.2rem;
		}
	}
`;
