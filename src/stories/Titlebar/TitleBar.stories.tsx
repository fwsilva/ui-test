import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TitleBar } from './TitleBar';

export default {
  title: '9thGear/TitleBar',
  component: TitleBar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof TitleBar>;

const Template: ComponentStory<typeof TitleBar> = (args) => <TitleBar {...args} />;


export const Default = Template.bind({});