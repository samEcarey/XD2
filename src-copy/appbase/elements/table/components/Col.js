import React from 'react'
import { StyledCol } from '../Table.styles'

export const Col = ({ children }) => {
	return (
		<StyledCol>
			{children}
		</StyledCol>
	)
}