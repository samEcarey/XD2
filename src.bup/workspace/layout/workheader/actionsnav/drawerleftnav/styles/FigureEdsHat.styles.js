import styled from "styled-components";

export const FigureEdsHatStyled = styled.figure`
	display: inline-block;
	margin: 0rem 0rem 0rem 0rem;
	padding: 0rem 0rem 0rem 0rem;
	a {
		display: inline-block;
		padding: 1.4rem 1rem 1.4rem 1rem;
		vertical-align: top;
		border: 1px solid BLUE;
		border-radius: 2.5rem;
		background: BLUE;
		svg {
			display: block;
			vertical-align: top;
			fill: WHITE;
			width: 2.4rem;
		}
		&:hover {
			border: 0.1rem solid WHITE;
			background: NAVY;
			svg {
				fill: WHITE;
				cursor: pointer;
			}
		}
	}
	/* background: red; */
`;
