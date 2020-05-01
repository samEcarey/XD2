import React from 'react'
import { StyledButton } from './Button.styles'

export const Button = ({ children }) => {
	return (
		<StyledButton>
			{children}
		</StyledButton>
	)
}