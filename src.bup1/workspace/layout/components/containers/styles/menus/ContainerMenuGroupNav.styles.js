import styled from "styled-components";
import { PRIMARY_COLOR, PRIMARY_TINT, WHITE_COLOR, SECONDARY_COLOR } from "app/constants"

export const ContainerMenuGroupNavSC = styled.nav`
	margin: 0rem 0rem 0rem 0rem;
	padding: 0rem 0rem 0rem 0rem;
	width: 100%;
	.Card {
		.Card-leftspace {
			padding-left: 0rem;
		}
		h2,
		h3,
		p,
		ul {
			margin: 0rem 0rem 0rem 0rem;
			padding: 0rem 0rem 0rem 0rem;
		}
		.MenuGroupNav-title {
			margin: 0rem 0rem 0rem 0rem;
			padding: 2rem 1.5rem 2rem 1.5rem;
			background-color: ${PRIMARY_TINT};
			color: ${WHITE_COLOR};
			
			h2 {
				font-size: 2rem;
			}
			p {
				font-size: 1.2rem;
			}
		}

		.MenuGroupNav-name {
			display: flex;
    		justify-content: space-between;
			margin: 0rem 0rem 1.5rem 0rem;
			padding: 4.5rem 0rem 0.5rem 0rem;
			border-bottom: 1px solid ${SECONDARY_COLOR};
			svg {
				color: ${WHITE_COLOR};
				cursor: pointer;
			}
			h3 {
				display: block;
				font-size: 1.4rem;
				color: ${SECONDARY_COLOR};
				font-weight: bold;
				text-transform: uppercase;
			}
		}
		.MenuGroupNav-menu {
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
			
		}
	}

	@media (min-width: 1280px) {
		width: 100%;
	}
`;
