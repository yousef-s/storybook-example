import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { PlusIcon, CheckIcon } from '../Icons';
import { Space } from '../Space';

import { Button } from './Button';

export default {
  title: 'Primitives/Button',
  component: Button,
  argTypes: {},
  decorators: [withDesign],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Space direction="vertical" gap="xs" css={{ alignItems: 'start' }}>
    <Button
      type="primary"
      size="large"
      BeforeIcon={() => <PlusIcon size="s" color="white" />}
      AfterIcon={() => <CheckIcon size="s" color="white" />}
      {...args}
    >
      Label
    </Button>
    <br />
    <Button type="primary" size="large" {...args}>
      Label
    </Button>

    <br />
    <Button type="primary" size="medium" {...args}>
      Label
    </Button>
    <br />
    <Button type="primary" size="small" {...args}>
      Label
    </Button>
    <br />
    <Button type="primary" size="xSmall" {...args}>
      Label
    </Button>
  </Space>
);

export const PrimaryButton = Template.bind({});

PrimaryButton.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/6WXgS4qZ90fDuSFRYfdYhj/%F0%9F%92%BB-Design-System?node-id=66%3A1540',
  },
};

PrimaryButton.args = {
  key: 'value',
};
