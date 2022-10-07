import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { HomeIcon } from '../../icons';

import { SideNav as Component } from './SideNav';

export default {
  title: 'Components/Side Nav',
  component: Component,
  argTypes: {},
  decorators: [withDesign],
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const SideNav = Template.bind({});

SideNav.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/6WXgS4qZ90fDuSFRYfdYhj/%F0%9F%92%BB-Design-System?node-id=254%3A50577',
  },
};

SideNav.args = {
  items: [
    {
      id: 'Dashboard',
      text: 'Dashboard',
      href: '#',
      IconComponent: HomeIcon,
    },
    {
      id: 'Team',
      text: 'Team',
      items: [
        { id: 'Support', text: 'Support' },
        { id: 'Design', text: 'Design' },
        { id: 'Development', text: 'Development' },
        { id: 'Management', text: 'Management' },
      ],
    },
    { id: 'Projects', text: 'Projects' },
    { id: 'Calendar', text: 'Calendar' },
    { id: 'Documents', text: 'Documents' },
    { id: 'Reports', text: 'Reports' },
  ],
  activeItems: ['Support'],
};
