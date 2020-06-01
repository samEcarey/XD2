import styled from "styled-components";
import { PRIMARY_SHADE } from "app/constants"

export const ModulesMenuULStyled = styled.ul`
	margin: 0rem 0rem 0rem 0rem;
	padding: 0rem 0rem 0rem 0rem;
	list-style: none;
	width: 100%;
	text-align: center;
	li {
		margin: 0rem 0rem 1.5rem 0rem;
		&:last-child {
			margin-bottom: 0rem;
		}
		padding: 1rem 1rem 1rem 1rem;
		&.active {
			background: ${PRIMARY_SHADE};
			border-radius: 1rem 0rem 0rem 1rem;
		}
		a {
			display: inline-block;
			.Skeleton-circle {
				padding-top: 0.5rem;
				width: 4rem;
				height: 4rem;
				font-size: 1.8rem;
				line-height: 1.8remrem;
				text-align: center;
				span {
					/* background: red; */
				}
			}
			/* background: green; */
		}
	}
	/* background: green; */
`;
