import React from 'react'
import { StyledUL } from './Lists.styles'

export const UL = ({ children }) => {
	return (
		<StyledUL>
			{children}
		</StyledUL>
	)
}