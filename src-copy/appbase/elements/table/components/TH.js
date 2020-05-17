import React from 'react'
import { StyledTH } from '../Table.styles'

export const TH = ({ children }) => {
	return (
		<StyledTH>
			{children}
		</StyledTH>
	)
}