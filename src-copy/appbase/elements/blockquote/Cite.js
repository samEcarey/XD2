import React from 'react'
import { StyledCite } from './Blockquote.styles'

export const Cite = ({ children }) => {
	return (
		<StyledCite>
			~{children}
		</StyledCite>
	)
}