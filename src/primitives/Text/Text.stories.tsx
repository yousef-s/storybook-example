import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import { Text as TextComponent } from './Text';

export default {
  title: 'Primitives/Text',
  component: TextComponent,
  argTypes: {},
  decorators: [withDesign],
} as ComponentMeta<typeof TextComponent>;

const Template: ComponentStory<typeof TextComponent> = (args) => (
  <>
    <TextComponent size="l" weight="bold" style="underline">
      Become a legendary UX/UI designer through real world and practical
      courses.{' '}
    </TextComponent>
    <br />
    <TextComponent size="m" style="strike" weight="semiBold">
      Become a legendary UX/UI designer through real world and practical
      courses.
    </TextComponent>

    <br />
    <TextComponent style="italic" size="s" weight="regular">
      Become a legendary UX/UI designer through real world and practical
      courses.
    </TextComponent>
    <br />
    <TextComponent size="xs">
      Become a legendary UX/UI designer through real world and practical
      courses.
    </TextComponent>
  </>
);

export const Text = Template.bind({});

Text.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/6WXgS4qZ90fDuSFRYfdYhj/%F0%9F%92%BB-Design-System?node-id=1907%3A184997',
  },
};

Text.args = {
  key: 'value',
};
