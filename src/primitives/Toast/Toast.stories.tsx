// import { ComponentMeta, ComponentStory } from '@storybook/react';
// import { withDesign } from 'storybook-addon-designs';
// import { Button } from '../Button';
// import { Space } from '../Space';

// import { ToastComponent } from './Toast';

// export default {
//   title: 'Primitives/Toast',
//   component: ToastComponent,
//   argTypes: {},
//   decorators: [withDesign],
// } as ComponentMeta<typeof ToastComponent>;

// const Template: ComponentStory<typeof ToastComponent> = (args) => (
//   <Space
//     gap="m"
//     direction="vertical"
//     css={{ alignItems: 'center', justifyContent: 'center', height: '100vh' }}
//     id="Alert-1"
//   >
//     <ToastComponent
//       type="info"
//       duration={100000}
//       sticky={false}
//       title="Alert line which displays the main function or reason of the alert."
//       description="Become a legendary UX/UI designer through real world and practical courses."
//       Actions={[
//         <Button key="Action1" type="tertiary" size="xSmall">
//           Action 1
//         </Button>,
//         <Button key="Action2" type="tertiary" size="xSmall">
//           Action 2
//         </Button>,
//       ]}
//       Trigger={({ onClick }) => (
//         <Button type="primary" size="large" onClick={onClick}>
//           Trigger Sticky Alert
//         </Button>
//       )}
//     />
//     <ToastComponent
//       type="info"
//       duration={100000}
//       sticky={true}
//       title="Provide contextual feedback messages for typical user actions."
//       Actions={[
//         <Button key="Action1" type="tertiary" size="xSmall">
//           Update
//         </Button>,
//         <Button key="Action2" type="tertiary" size="xSmall">
//           Delete
//         </Button>,
//       ]}
//       Trigger={({ onClick }) => (
//         <Button type="primary" size="large" onClick={onClick}>
//           Trigger Sticky Alert
//         </Button>
//       )}
//     />
//     <ToastComponent
//       duration={100000}
//       type="infoLight"
//       sticky={true}
//       title="Provide contextual feedback messages for typical user actions."
//       Trigger={({ onClick }) => (
//         <Button type="primary" size="large" onClick={onClick}>
//           Trigger Sticky Alert
//         </Button>
//       )}
//     />
//   </Space>
// );
// //
// export const Toast = Template.bind({});

// Toast.parameters = {
//   design: {
//     type: 'figma',
//     url: 'https://www.figma.com/file/6WXgS4qZ90fDuSFRYfdYhj/%F0%9F%92%BB-Design-System?node-id=1603%3A182468',
//   },
// };

// Toast.args = {
//   key: 'value',
// };
