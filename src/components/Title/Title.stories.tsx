import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Button } from '../../primitives/Button';

import { PageTitle } from './Title';

export default {
  title: 'Primitives/Title',
  component: PageTitle,
  argTypes: {},
  decorators: [withDesign],
} as ComponentMeta<typeof PageTitle>;

const Template: ComponentStory<typeof PageTitle> = (args) => (
  <>
    <PageTitle
      IconComponent={<>+</>}
      OverlineComponent={<>Overline</>}
      heading="Heading"
      description="Headings communicate the organization of the content on the page."
      ActionComponent={
        <>
          <Button type="outlined" size="xSmall">
            Label
          </Button>
          <Button type="primary" size="xSmall">
            Label
          </Button>
        </>
      }
    />
  </>
);

export const Title = Template.bind({});

Title.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/6WXgS4qZ90fDuSFRYfdYhj/%F0%9F%92%BB-Design-System?node-id=188%3A39657',
  },
};

Title.args = {};
