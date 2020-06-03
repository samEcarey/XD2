import styled from "styled-components";
import { PRIMARY_COLOR, PRIMARY_SHADE, PRIMARY_TINT, WHITE_COLOR, GREY_950 } from "app/constants";

export const MenuGroupMenuStyled = styled.div`
	margin-left: 0rem;
	padding: 0rem;
	ul {
		list-style: none;
		li {
			display: flex;
			align-items: center;
			svg {
				margin: 1rem;
			}
			a {
				display: block;
				padding: 1rem;
				font-size: 1.4rem;
				color: ${WHITE_COLOR};
			}
			&:hover, &.active {
				background: ${PRIMARY_COLOR};
				border-right: 0.5rem solid ${PRIMARY_TINT};
				svg {
					color: ${WHITE_COLOR};
				}
			}
		}
	}
`;
