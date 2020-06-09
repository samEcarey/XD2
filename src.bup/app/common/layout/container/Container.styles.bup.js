import styled from "styled-components";

export const ContainerStyled = styled.section`
	${props => props.margin === true && "margin: 0rem 0rem 3rem 0rem;"};
	${props => props.padding === true && "padding: 1.5rem;"};
	background-color: #f1f1f1;
	p {
		&:last-of-type {
			margin-bottom: 0rem;
		}
	}
`;
