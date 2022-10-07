import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import { FluidGrid as Component } from './FluidGrid';
import { GridItem } from './GridItem';

export default {
  title: 'Components/Fluid Grid',
  component: Component,
  argTypes: {},
  decorators: [withDesign],
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} css={{ backgroundColor: '$neutral50' }}>
    {new Array(12).fill(null).map((_, index) => (
      <GridItem key={index} css={{ backgroundColor: '#fae1e1', height: '100vh' }} />
    ))}
  </Component>
);

export const FluidGrid = Template.bind({});

FluidGrid.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/6WXgS4qZ90fDuSFRYfdYhj/%F0%9F%92%BB-Design-System?node-id=39%3A890',
  },
};

FluidGrid.args = {
  columns: 12,
};
