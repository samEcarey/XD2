import React from 'react';
import { action } from '@storybook/addon-actions'
import { A } from './A'

export const ABasic = () => (
	<A
		href="https://www.yahoo.com"
		title="Yahoo"
		target="_blank"
	>yahoo</A>
)

export default {
	component: A,
	title: 'Actions',
}