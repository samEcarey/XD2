import React from 'react'
import styled from 'styled-components'

export const TH = (props) => {
	return (
		<StyledTH {...props}>
			{props.children}
		</StyledTH>
	)
}

const StyledTH = styled.th`
	border-left: ${props => props.dragOver ? "5px solid red" : ""} !important;
	border-right: ${props => props.dragOver ? "5px solid red" : ""} !important;
`