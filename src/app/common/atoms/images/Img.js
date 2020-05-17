import React from 'react'
import { StyledImg } from './Img.styles'

export function Img(props) {
	return (
		<StyledImg
			src={props.src}
			alt={props.alt}
			title={props.title}
		/>
	)
}