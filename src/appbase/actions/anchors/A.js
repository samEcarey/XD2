import React from 'react'
import { StyledA } from './A.styles'

export const A = ({ children, href, title, target }) => {
	return (
		<StyledA
			href={href}
			title={title}
			target={target}
		>
			{children}
		</StyledA>
	)
}