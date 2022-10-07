import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import { FormInput } from './Input';
import { PlusIcon, Space } from '../../primitives';

export default {
  title: 'Primitives/Input',
  // component: FormInput,
  argTypes: {},
  decorators: [withDesign],
} as ComponentMeta<typeof FormInput>;

const Template: ComponentStory<typeof FormInput> = () => (
  <Space direction="vertical" gap="m" css={{ alignItems: 'start' }}>
    <FormInput
      LeftAddon={<PlusIcon size="s" />}
      RightAddon={<PlusIcon size="s" />}
      label="Label"
      message="Email address is required"
      variant="line"
      status="error"
    />

    <FormInput
      LeftAddon={<PlusIcon size="s" />}
      RightAddon={<PlusIcon size="s" />}
      label="Label"
      message="Email address is required"
      variant="line"
    />

    <FormInput
      LeftAddon={<PlusIcon size="s" />}
      RightAddon={<PlusIcon size="s" />}
      label="Label"
      message="Email address is required"
    />

    <FormInput
      RightAddon={<PlusIcon size="s" />}
      label="Label"
      message="Email address is required"
    />

    <FormInput label="Label" message="Email address is required" />

    <FormInput status="error" message="Email address is required" />
  </Space>
);

export const Input = Template.bind({});

Input.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/6WXgS4qZ90fDuSFRYfdYhj/%F0%9F%92%BB-Design-System?node-id=799%3A139964',
  },
};

Input.args = {};
