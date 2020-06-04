import styled from "styled-components";
import { PRIMARY_COLOR, PRIMARY_SHADE, PRIMARY_TINT, WHITE_COLOR, GREY_950 } from "app/constants";

export const MenuGroupMenuStyled = styled.div`
	margin-left: 0rem;
	padding: 0rem;
	ul {
		list-style: none;
		li {
			border: 2px solid ${WHITE_COLOR};
			border-radius: 0.5rem;
			margin-top: 2rem; 
			text-align: center;
			a {
				display: block;
				padding: 1.5rem;
				font-size: 1.6rem;
				color: ${WHITE_COLOR};
			}
			&:hover, &.active {
				background: ${PRIMARY_COLOR};
				border: 2px solid ${PRIMARY_TINT};
			}
		}
	}
`;
