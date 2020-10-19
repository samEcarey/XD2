import React from 'react'
import styled, { css } from 'styled-components'

export const FormGroup = (props) => {
	return (
		<StyledFormGroup {...props}>
			{props.children}
		</StyledFormGroup>
	)
}

export const BaseFormGroup = css``

const StyledFormGroup = styled.div`
	${BaseFormGroup}
	
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	flex-wrap: nowrap;
	align-items: center;
	align-content: center; 
	
	padding: 1.5rem;
	/* ${props => props.layout == 'savecontext' && 'float: right;'} */
`