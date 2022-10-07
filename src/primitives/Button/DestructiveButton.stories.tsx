import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
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
    <Button destructive type="primary" size="large" {...args}>
      Label
    </Button>
    <br />
    <Button destructive type="secondary" size="large" {...args}>
      Label
    </Button>

    <br />
    <Button destructive type="outlined" size="medium" {...args}>
      Label
    </Button>
    <br />
    <Button destructive type="tertiary" size="small" {...args}>
      Label
    </Button>
  </Space>
);

export const DestructiveButton = Template.bind({});

DestructiveButton.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/6WXgS4qZ90fDuSFRYfdYhj/%F0%9F%92%BB-Design-System?node-id=66%3A1540',
  },
};

DestructiveButton.args = {
  key: 'value',
};
