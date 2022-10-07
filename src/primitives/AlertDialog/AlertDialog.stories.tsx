import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Space } from '../Space';
import { Button } from '../Button';

import { AlertDialog } from './AlertDialog';

export default {
  title: 'Primitives/AlertDialog',
  component: AlertDialog,
  argTypes: {},
  decorators: [withDesign],
} as ComponentMeta<typeof AlertDialog>;

const Template: ComponentStory<typeof AlertDialog> = (args) => (
  <Space
    gap="m"
    direction="vertical"
    css={{ alignItems: 'start' }}
    id="Alert-1"
  >
    <AlertDialog
      title="Alert line which displays the main function or reason of the alert."
      description="Become a legendary UX/UI designer through real world and practical courses."
      Trigger={
        <Button type="outlined" size="large">
          Open Dialog
        </Button>
      }
    />
  </Space>
);

export const Alert = Template.bind({});

Alert.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/6WXgS4qZ90fDuSFRYfdYhj/%F0%9F%92%BB-Design-System?node-id=1603%3A182468',
  },
};

Alert.args = {};
