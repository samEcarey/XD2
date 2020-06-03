import React from 'react';
import { action } from '@storybook/addon-actions'
import { Img } from './Img'

export const ImgBasic = () => (
	<Img
		src="https://via.placeholder.com/150"
		alt="Image alt"
		title="Image title"
	/>
)

export default {
	component: Img,
	title: 'Atoms',
}