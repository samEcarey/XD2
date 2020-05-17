import React from 'react'
import { StyledPre } from './Code.styles'

export const Pre = ({ children }) => {
	return (
		<StyledPre>
			{children}
		</StyledPre>
	)
}