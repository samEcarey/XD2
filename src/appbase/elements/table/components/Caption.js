import React from 'react'
import { StyledCaption } from '../Table.styles'

export const Caption = ({ children }) => {
	return (
		<StyledCaption>
			{children}
		</StyledCaption>
	)
}