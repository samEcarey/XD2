import React from 'react'
import styled from 'styled-components'

export const TD = (props) => {
	return (
		<StyledTD {...props}>
			{props.children}
		</StyledTD>
	)
}

const StyledTD = styled.td`
	border-left: ${props => props.dragOver ? "5px solid red" : ""} !important;
	border-right: ${props => props.dragOver ? "5px solid red" : ""} !important;
`