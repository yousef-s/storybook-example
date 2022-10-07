import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Space } from '../Space';

import { CheckboxWithLabel as CheckboxComponent } from './Checkbox';

export default {
  title: 'Primitives/Checkbox',
  component: CheckboxComponent,
  argTypes: {},
  decorators: [withDesign],
} as ComponentMeta<typeof CheckboxComponent>;

const Template: ComponentStory<typeof CheckboxComponent> = (args) => (
  <Space
    gap="m"
    direction="vertical"
    css={{ alignItems: 'start' }}
    id="checbox-1"
  >
    <CheckboxComponent>
      Description of what this control would do.
    </CheckboxComponent>

    <CheckboxComponent heading="Control button heading" id="checbox-2">
      Description of what this control would do.
    </CheckboxComponent>

    <CheckboxComponent disabled heading="Control button heading" id="checbox-3">
      Description of what this control would do.
    </CheckboxComponent>
  </Space>
);

export const Checkbox = Template.bind({});

Checkbox.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/6WXgS4qZ90fDuSFRYfdYhj/%F0%9F%92%BB-Design-System?node-id=1603%3A182468',
  },
};

Checkbox.args = {
  key: 'value',
};
