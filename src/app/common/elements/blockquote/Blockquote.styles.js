import styled from "styled-components";
import { PRIMARY_COLOR } from "app/data";

export const StyledBlockquote = styled.blockquote`
	/* margin-bottom: 2.5rem; */
	margin-right: 0rem 0rem 1.5rem 0rem;
	padding: 1rem 1.5rem;
	border-left: 0.3rem solid ${PRIMARY_COLOR};

	*:last-child {
		margin-bottom: 0;
	}
`;

export const StyledQ = styled.q`
	display: block;
	margin-bottom: 0.5rem;
`;

export const StyledCite = styled.cite``;
