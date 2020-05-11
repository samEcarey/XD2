import styled from 'styled-components'

export const StyledUL = styled.ul`
	/* margin-bottom: 2.5rem; */
	margin: 0rem 0rem 0rem 2.0rem;
	padding: 0rem 0rem 0rem 0rem;
	list-style: none;
	li {
		margin-bottom: 1.0rem
	}
	ul {
		font-size: 90%;
		margin: 1.5rem 0rem 0rem 3.0rem;
	}
`

export const StyledULCircles = styled(StyledUL)`
	list-style: circle inside;
`;

export const StyledOL = styled(StyledUL)`
	/* margin-bottom: 2.5rem; */
	list-style: decimal inside;
`;

export const StyledLI = styled.li`
	margin-bottom: 1.0rem;
`

export const StyledDL = styled(StyledUL)`
	/* margin-bottom: 2.5rem; */
	margin-bottom: 0rem;
`;

export const StyledDT = styled.dt`
	margin-bottom: 1.0rem;
`

export const StyledDD = styled.dd`
	margin-bottom: 1.0rem;
`