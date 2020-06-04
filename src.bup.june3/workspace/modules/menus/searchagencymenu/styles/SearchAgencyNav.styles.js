import styled from "styled-components";
import { Breakpoints } from "app/common";
import { PRIMARY_SHADE, SECONDARY_SHADE, GREY_700, GREY_950 } from "app/constants";

export const SearchAgencyNavStyled = styled.nav`
	display: block;
	@media ${Breakpoints.lg} { display: none; }
	ul {
		margin: 0rem 0rem 0rem 0rem;
		padding: 0rem 0rem 0rem 0rem;
		list-style: none;
		width: 100%;
		text-align: center;
		border-bottom: 1px solid ${PRIMARY_SHADE};
		li {
			margin: 1rem;
			background: ${PRIMARY_SHADE};
			border-radius: 0.5rem;
			width: 6rem;
			height: 6rem;
			display: flex;
			justify-content: center;
			align-items: center;
			&.active, &:hover {
				background: ${GREY_950};
				svg { color: ${SECONDARY_SHADE}; }
			}
			svg {
				width: 4rem;
				height: 4rem;
				color: ${GREY_700};
			}
		}
	}
`;
