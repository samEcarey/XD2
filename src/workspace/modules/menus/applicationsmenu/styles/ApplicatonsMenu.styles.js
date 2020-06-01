import styled from "styled-components";

export const ApplicationsMenuULStyled = styled.ul`
	margin: 0rem 0rem 0rem 0rem;
	padding: 0rem 0rem 0rem 0rem;
	list-style: none;
	li {
		margin: 0rem 0rem 1.5rem 0rem;
		&:last-child {
			margin-bottom: 0rem;
		}
		padding: 1rem 1rem 1rem 1rem;
		&.active {
			background: WHITE;
		}
		a {
			display: inline-block;
			.Skeleton-square {
				padding-top: 1rem;
				width: 4rem;
				height: 4rem;
				font-size: 0.8rem;
				line-height: 1rem;
				text-align: center;
				span {
					/* background: red; */
				}
			}
		}
	}
	
`;
