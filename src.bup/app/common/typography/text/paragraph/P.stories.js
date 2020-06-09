import React from 'react';
import { action } from '@storybook/addon-actions'
import { P } from './P'

export const PBasic = () => (
	<P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quas commodi iure. Molestiae, quas. Officiis qui veritatis veniam cumque nesciunt.</P>
)

export default {
	component: P,
	title: 'Atoms',
}