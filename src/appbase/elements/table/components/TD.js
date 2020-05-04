import React from 'react'
import { StyledTD } from '../Table.styles'

export const TD = ({ children }) => {
	return (
		<StyledTD>
			{children}
		</StyledTD>
	)
}