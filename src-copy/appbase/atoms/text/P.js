import React from 'react'
import { StyledP } from './Text.styles'

export const P = ({ children }) => {
	return (
		<StyledP>
			{children}
		</StyledP>
	)
}