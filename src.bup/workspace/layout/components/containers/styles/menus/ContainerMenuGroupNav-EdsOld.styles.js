import styled from "styled-components";

export const ContainerMenuGroupNavSC = styled.nav`
	margin: 0rem 0rem 0rem 0rem;
	padding: 0rem 0rem 0rem 0rem;
	width: 100%;
	border-radius: 2px;
	background-color: #ffffff;
	/* border-bottom: 1px solid #31a0cc; */
	/* box-shadow: 0px 4px 8px -3px rgba(17, 17, 17, 0.02); */

	.Card {
		h2,
		h3,
		p,
		ul {
			margin: 0rem 0rem 0rem 0rem;
			padding: 0rem 0rem 0rem 0rem;
		}
		.MenuGroupNav-title {
			padding: 1.5rem 1.5rem 1.5rem 1.5rem;
			border-bottom: 1px solid #f1f1f1;
			h2 {
				font-size: 2.4rem;
			}
			p {
				font-size: 1.2rem;
			}
			/* background: red; */
		}
		.MenuGroupNav-name {
			padding: 1.5rem 1.5rem 1.5rem 1.5rem;
			svg {
				margin-right: 1rem;
				fill: NAVY;
				width: 2.4rem;
				height: 2.4rem;
			}
			h3 {
				font-size: 2rem;
			}
			/* background: blue; */
		}
		.MenuGroupNav-menu {
			margin-left: 0.5rem;
			padding: 0rem 1.5rem 1.5rem 1.5rem;
			ul {
				list-style: none;
				li {
					padding-bottom: 1rem;
					&:last-child {
						padding-bottom: 0rem;
					}
					svg {
						margin-right: 2rem;
						fill: NAVY;
						width: 1rem;
						height: 1rem;
					}
				}
			}
			/* background: orange; */
		}
	}

	@media (min-width: 1280px) {
		background: green;
	}
`;
