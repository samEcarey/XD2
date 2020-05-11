import styled from 'styled-components'
import { QUATERNARY_COLOR } from '../../../appdata'

export const StyledBlockquote = styled.blockquote`
	/* margin-bottom: 2.5rem; */
	margin-right: 0rem 0rem 1.5rem 0rem;
	padding: 1rem 1.5rem;
	border-left: .3rem solid ${QUATERNARY_COLOR};

	*:last-child {
		margin-bottom: 0;
	}
`

export const StyledQ = styled.q`
	display: block;
	margin-bottom: .5rem;
`

export const StyledCite = styled.cite`

`