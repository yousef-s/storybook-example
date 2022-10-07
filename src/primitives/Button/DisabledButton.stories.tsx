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
    <Button disabled destructive type="primary" size="large" {...args}>
      Label
    </Button>
    <br />
    <Button disabled destructive type="secondary" size="large" {...args}>
      Label
    </Button>

    <br />
    <Button disabled destructive type="outlined" size="medium" {...args}>
      Label
    </Button>
    <br />
    <Button disabled destructive type="tertiary" size="small" {...args}>
      Label
    </Button>
    <Button disabled type="primary" size="large" {...args}>
      Label
    </Button>
    <br />
    <Button disabled type="secondary" size="large" {...args}>
      Label
    </Button>

    <br />
    <Button disabled type="outlined" size="medium" {...args}>
      Label
    </Button>
    <br />
    <Button disabled type="tertiary" size="small" {...args}>
      Label
    </Button>
  </Space>
);

export const DisabledButton = Template.bind({});

DisabledButton.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/6WXgS4qZ90fDuSFRYfdYhj/%F0%9F%92%BB-Design-System?node-id=66%3A1540',
  },
};

DisabledButton.args = {
  key: 'value',
};
