import styled from "styled-components";

export const AgencySearchNavStyled = styled.nav`
	form {
		margin: 0rem 0rem 0rem 0rem;
		padding: 0rem 0rem 0rem 0rem;
		/* border: 1px solid black; */
		.Form-group {
			margin: 0rem 0rem 0rem 0rem;
			padding: 0.3rem 0rem 0rem 0rem;
			background: rgba(26, 29, 31, 0.2);
			border-radius: 2.5rem;
			svg {
				margin-left: 0.6rem;
			}
			input {
				margin: 0rem 0rem 0rem 0rem;
				padding: 0.5rem 0.5rem 0.9rem 0.5rem;
				/* width: 30rem; */
				border-radius: 0rem;
				border: none;
				color: rgba(26, 29, 31, 0.4);
				&::placeholder {
					color: rgba(26, 29, 31, 0.2);
				}
			}
		}
	}
`;
