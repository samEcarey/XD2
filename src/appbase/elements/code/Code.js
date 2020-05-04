import React from 'react'
import { StyledCode } from './Code.styles'
import { Pre } from './Pre'

export const Code = ({ children }) => {
	return (
		<Pre>
			<StyledCode>
				{children}
			</StyledCode>
		</Pre>
	)
}