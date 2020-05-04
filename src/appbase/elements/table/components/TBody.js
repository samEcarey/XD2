import React from 'react'
import { StyledTBody } from '../Table.styles'

export const TBody = ({ children }) => {
	return (
		<StyledTBody>
			{children}
		</StyledTBody>
	)
}