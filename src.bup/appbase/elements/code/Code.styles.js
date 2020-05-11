import styled from 'styled-components'
import { PRIMARY_COLOR, TERTIARY_COLOR } from '../../../appdata'

export const StyledCode = styled.code`
	margin: 0 .2rem;
	padding: .2rem .5rem;
	font-size: 86%;
	white-space: nowrap;
	background: ${TERTIARY_COLOR};
	border-radius: .4rem;
`

export const StyledPre = styled.pre`
	/* margin-bottom: 2.5rem; */
	margin-bottom: 1.5rem;
	overflow-y: hidden;
	background: ${TERTIARY_COLOR};
	border-left: .3rem solid ${PRIMARY_COLOR};

	& > code {
		display: block;
		padding: 1rem 1.5rem;
		white-space: pre;
		border-radius: 0;
	}
`