import React from 'react'
import { StyledBlockquote } from './Blockquote.styles'
import { Cite } from './Cite'
import { Q } from './Q'

export const Blockquote = ({ children }) => {
	return (
		<StyledBlockquote>
			<Q>{children}</Q>
			<Cite>Mario Mecaroni</Cite>
		</StyledBlockquote>
	)
}