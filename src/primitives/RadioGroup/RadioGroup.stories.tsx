import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Space } from '../Space';

import { RadioGroupWithLabel as RadioGroupComponent } from './RadioGroup';

export default {
  title: 'Primitives/RadioGroup',
  component: RadioGroupComponent,
  argTypes: {},
  decorators: [withDesign],
} as ComponentMeta<typeof RadioGroupComponent>;

const Template: ComponentStory<typeof RadioGroupComponent> = (args) => (
  <Space
    gap="m"
    direction="vertical"
    css={{ alignItems: 'start' }}
    id="RadioGroup-1"
  >
    <RadioGroupComponent {...args}>
      Description of what this control would do.
    </RadioGroupComponent>
  </Space>
);

export const RadioGroup = Template.bind({});

RadioGroup.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/6WXgS4qZ90fDuSFRYfdYhj/%F0%9F%92%BB-Design-System?node-id=1603%3A182468',
  },
};

RadioGroup.args = {
  key: 'value',
  selected: 'radio1',
  options: [
    {
      id: 'radio1',
      value: 'radio1',
      label: 'Description of what this control would do.',
    },
    {
      id: 'radio2',
      value: 'radio2',
      heading: 'Control button heading',
      label: 'Description of what this control would do.',
    },
    {
      id: 'radio3',
      value: 'radio3',
      heading: 'Control button heading',
      label: 'Description of what this control would do.',
      disabled: true,
    },
  ],
};
