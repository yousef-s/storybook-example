import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import { Heading as HeadingComponent } from './Heading';

export default {
  title: 'Primitives/Heading',
  component: HeadingComponent,
  argTypes: {},
  decorators: [withDesign],
} as ComponentMeta<typeof HeadingComponent>;

const Template: ComponentStory<typeof HeadingComponent> = (args) => (
  <>
    <HeadingComponent size="xxxl" weight="xxBold">
      Become a legendary UX/UI designer through real world and practical
      courses.{' '}
    </HeadingComponent>
    <br />
    <HeadingComponent size="xxl" weight="xBold">
      Become a legendary UX/UI designer through real world and practical
      courses.
    </HeadingComponent>

    <br />
    <HeadingComponent size="h1" weight="bold">
      Become a legendary UX/UI designer through real world and practical
      courses.
    </HeadingComponent>
    <br />
    <HeadingComponent size="h2" weight="semiBold">
      Become a legendary UX/UI designer through real world and practical
      courses.
    </HeadingComponent>
    <br />

    <HeadingComponent size="h3" weight="regular">
      Become a legendary UX/UI designer through real world and practical
      courses.
    </HeadingComponent>
    <br />

    <HeadingComponent size="h4" weight="regular">
      Become a legendary UX/UI designer through real world and practical
      courses.
    </HeadingComponent>
    <br />

    <HeadingComponent size="h5" weight="regular">
      Become a legendary UX/UI designer through real world and practical
      courses.
    </HeadingComponent>
    <br />

    <HeadingComponent size="h6" weight="regular">
      Become a legendary UX/UI designer through real world and practical
      courses.
    </HeadingComponent>
  </>
);

export const Heading = Template.bind({});

Heading.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/6WXgS4qZ90fDuSFRYfdYhj/%F0%9F%92%BB-Design-System?node-id=1907%3A184997',
  },
};

Heading.args = {
  key: 'value',
};
