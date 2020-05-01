import React from 'react';
import { linkTo } from '@storybook/addon-links'
import { Appbase } from './AppBase'

export const ToStorybook = () => (
  // <Appbase showApp={linkTo('Button')} />
  <Appbase />
)

ToStorybook.story = {
  name: 'to Storybook',
}

export default {
  component: Appbase,
  title: 'Appbase',
}
