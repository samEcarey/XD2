import React from 'react'
import { StyledQ } from './Blockquote.styles'

export const Q = ({ children }) => {
	return (
		<StyledQ>
			{children}
		</StyledQ>
	)
}