import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Space } from '../Space';

import { CheckIcon, PlusIcon, MenuIcon } from '.';

export default {
  title: 'Primitives/Icons',
  component: CheckIcon,
  argTypes: {},
  decorators: [withDesign],
} as ComponentMeta<typeof CheckIcon>;

const Template: ComponentStory<typeof CheckIcon> = (args) => (
  <Space
    gap="m"
    direction="vertical"
    css={{ alignItems: 'start' }}
    id="checbox-1"
  >
    <CheckIcon size="l" color="black" />
    <PlusIcon size="l" color="primary" />
    <MenuIcon size="l" color="primary" />
  </Space>
);

export const Icon = Template.bind({});

Icon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/6WXgS4qZ90fDuSFRYfdYhj/%F0%9F%92%BB-Design-System?node-id=56%3A3079',
  },
};

Icon.args = {
  key: 'value',
};
