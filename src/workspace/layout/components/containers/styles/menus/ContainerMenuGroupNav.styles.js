import styled from "styled-components";

export const ContainerMenuGroupNavSC = styled.nav`
	margin: 0rem 0rem 0rem 0rem;
	padding: 0rem 0rem 0rem 0rem;
	/* width: 100%; */
	width: 207px;
	border-radius: 2px;
	background-color: #ffffff;
	/* border-bottom: 1px solid #31a0cc; */
	/* box-shadow: 0px 4px 8px -3px rgba(17, 17, 17, 0.02); */

	.Card {
		.Card-leftspace {
			/* padding-left: 1.5rem; */
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
			padding: 1.5rem 1.5rem 1.5rem 1.5rem;
			/* background-color: NAVY; */
			background-color: #4e5264;
			color: WHITE;
			/* border-bottom: 1.5rem solid #f1f1f1; */
			h2 {
				font-size: 2.4rem;
				text-transform: uppercase;
			}
			p {
				font-size: 1.2rem;
			}
			/* background: red; */
		}

		.MenuGroupNav-name {
			margin: 0rem 0rem 1.5rem 0rem;
			padding: 1.5rem 0rem 0.5rem 0rem;
			border-bottom: 1px solid #f1f1f1;
			h3 {
				display: block;
				font-size: 1.4rem;
				color: #e1e1e1;
				font-weight: bold;
				text-transform: uppercase;
			}
			/* background: blue; */
		}
		.MenuGroupNav-menu {
			/* margin-left: 1.5rem; */
			/* padding: 0rem 1.5rem 1.5rem 0rem; */
			margin-left: 0rem;
			padding: 0rem;
			/* background: red; */
			ul {
				list-style: none;
				li {
					a {
						display: block;
						padding: 1rem;
						font-size: 1.4rem;
						color: #83879a;
						&:hover {
							color: #4e5264;
							background: #f1f1f1;
						}
						&.active {
							/* color: NAVY; */
							color: #4e5264;
							background: #f1f1f1;
							/* border-left: 0.3rem solid NAVY; */
							border-left: 0.3rem solid #4e5264;
						}
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
