import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import { Grid as Component } from './Grid';
import { GridItem } from './GridItem';

export default {
  title: 'Components/Grid',
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

export const Grid = Template.bind({});

Grid.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/6WXgS4qZ90fDuSFRYfdYhj/%F0%9F%92%BB-Design-System?node-id=39%3A890',
  },
};

Grid.args = {
  small: 4,
  medium: 6,
  large: 12,
};
