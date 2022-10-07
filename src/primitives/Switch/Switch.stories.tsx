import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Space } from '../Space';

import { SwitchWithLabel as SwitchComponent } from './Switch';

export default {
  title: 'Primitives/Switch',
  component: SwitchComponent,
  argTypes: {},
  decorators: [withDesign],
} as ComponentMeta<typeof SwitchComponent>;

const Template: ComponentStory<typeof SwitchComponent> = (args) => (
  <Space
    gap="m"
    direction="vertical"
    css={{ alignItems: 'start' }}
    id="switch-1"
  >
    <SwitchComponent>
      Description of what this control would do.
    </SwitchComponent>

    <SwitchComponent heading="Control button heading" id="switch-2">
      Description of what this control would do.
    </SwitchComponent>

    <SwitchComponent disabled heading="Control button heading" id="switch-3">
      Description of what this control would do.
    </SwitchComponent>
  </Space>
);

export const Switch = Template.bind({});

Switch.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/6WXgS4qZ90fDuSFRYfdYhj/%F0%9F%92%BB-Design-System?node-id=1603%3A182468',
  },
};

Switch.args = {
  key: 'value',
};
