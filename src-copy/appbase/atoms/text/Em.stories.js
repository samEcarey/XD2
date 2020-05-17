import React from 'react';
import { action } from '@storybook/addon-actions'
import { P } from './P'
import { Em } from './Em'

export const EmBasic = () => (
	<P>Lorem ipsum <Em>dolor sit amet</Em> consectetur adipisicing elit. Velit quas commodi iure. Molestiae, quas. Officiis qui veritatis veniam cumque nesciunt.</P>
)

export default {
	component: Em,
	title: 'Atoms',
}