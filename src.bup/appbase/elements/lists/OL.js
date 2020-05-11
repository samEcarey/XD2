import React from 'react'
import { StyledOL } from './Lists.styles'

export const OL = ({ children }) => {
	return (
		<StyledOL>
			{children}
		</StyledOL>
	)
}