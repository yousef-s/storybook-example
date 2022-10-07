import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { CheckIcon, PlusIcon } from '../Icons';
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
      type="outlined"
      size="large"
      BeforeIcon={() => <PlusIcon size="s" color="white" />}
      AfterIcon={() => <CheckIcon size="s" color="white" />}
      {...args}
    >
      Label
    </Button>
    <br />
    <Button type="outlined" size="large" {...args}>
      Label
    </Button>

    <br />
    <Button type="outlined" size="medium" {...args}>
      Label
    </Button>
    <br />
    <Button type="outlined" size="small" {...args}>
      Label
    </Button>
    <br />
    <Button type="outlined" size="xSmall" {...args}>
      Label
    </Button>
  </Space>
);

export const OutlinedButton = Template.bind({});

OutlinedButton.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/6WXgS4qZ90fDuSFRYfdYhj/%F0%9F%92%BB-Design-System?node-id=66%3A1540',
  },
};

OutlinedButton.args = {
  key: 'value',
};
