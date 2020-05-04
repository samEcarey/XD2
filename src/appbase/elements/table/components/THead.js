import React from 'react'
import { StyledTHead } from '../Table.styles'

export const THead = ({ children }) => {
	return (
		<StyledTHead>
			{children}
		</StyledTHead>
	)
}