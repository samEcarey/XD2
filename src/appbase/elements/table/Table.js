import React from 'react'
import { StyledTable } from './Table.styles'

export const Table = ({ children }) => {
	return (
		<StyledTable>
			{children}
		</StyledTable>
	)
}