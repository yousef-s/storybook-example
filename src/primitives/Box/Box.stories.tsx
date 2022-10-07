import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Box } from './Box';

export default {
  title: 'Primitives/Box',
  component: Box,
  argTypes: {},
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => (
  <Box {...args}>Hello world</Box>
);

export const Example = Template.bind({});

Example.args = {
  key: 'value',
  css: {
    background: 'red',
  },
};
