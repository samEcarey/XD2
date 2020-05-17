import React from 'react'
import { StyledColgroup } from '../Table.styles'

export const Colgroup = ({ children }) => {
	return (
		<StyledColgroup>
			{children}
		</StyledColgroup>
	)
}