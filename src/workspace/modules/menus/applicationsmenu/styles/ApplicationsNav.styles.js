import styled from "styled-components";
import { breakpoints } from "app/common";
import { SKELETON_TINT } from "app/data";
import { GREY_600 } from "app/constants"

export const ApplicationsNavStyled = styled.nav`
	margin: 0rem 0rem 0rem 0rem;
	padding: 3rem 0rem 3rem 0rem;
	//border-top: 1px solid WHITE;
	svg {
		color: ${GREY_600};
	}
	ul {
		li {
			a {
			}
		}
	}
`;
