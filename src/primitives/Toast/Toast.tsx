// import type * as Stitches from '@stitches/react';

// import { keyframes } from '@stitches/react';
// import React from 'react';

// import * as ToastPrimitive from '@radix-ui/react-toast';

// import type { ComponentOwnProps } from '../../types';

// import { styled } from '../../styles';
// import { Text } from '../Text';
// import { Space } from '../Space';
// import { CloseIcon } from '../Icons/CloseIcon/CloseIcon';

// const VIEWPORT_PADDING = 25;

// const hide = keyframes({
//   '0%': { opacity: 1 },
//   '100%': { opacity: 0 },
// });

// const slideIn = keyframes({
//   from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
//   to: { transform: 'translateX(0)' },
// });

// const swipeOut = keyframes({
//   from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
//   to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
// });

// ////////////////////////////////////////////////////////////////////////////////

// ///////// Toast - ViewPort

// ////////////////////////////////////////////////////////////////////////////////

// const ViewPort = styled(ToastPrimitive.Viewport, {
//   position: 'fixed',
//   top: 0,
//   right: 0,
//   left: 0,
//   display: 'flex',
//   flexDirection: 'column',
//   padding: VIEWPORT_PADDING,
//   gap: 10,
//   width: 'auto',
//   maxWidth: '100vw',
//   margin: 0,
//   listStyle: 'none',
//   zIndex: 2147483647,
//   outline: 'none',
//   variants: {
//     sticky: {
//       true: {
//         height: '60px',
//       },
//     },
//   },
//   length: 'auto',
// });

// ViewPort.displayName = 'ToastViewPort';

// export type ToastViewPortElement = React.ElementRef<typeof ViewPort>;
// export type ToastViewPortOwnProps = ComponentOwnProps<typeof ViewPort>;
// export type ToastViewPortVariants = Stitches.VariantProps<typeof ViewPort>;

// ////////////////////////////////////////////////////////////////////////////////

// ///////// Toast - Title

// ////////////////////////////////////////////////////////////////////////////////
// const Title = styled(ToastPrimitive.Title, {
//   gridArea: 'title',
//   color: 'inherit',
// });
// Title.displayName = 'ToastTitle';

// export type ToastTitleElement = React.ElementRef<typeof Title>;
// export type ToastTitleOwnProps = ComponentOwnProps<typeof Title> & {
//   heading?: string;
// };
// export type ToastTitleVariants = Stitches.VariantProps<typeof Title>;

// ////////////////////////////////////////////////////////////////////////////////

// ///////// Toast - Description

// ////////////////////////////////////////////////////////////////////////////////
// const Description = styled(ToastPrimitive.Description, {
//   gridArea: 'description',
//   margin: 0,
//   color: '$dark1',
//   fontSize: 13,
//   lineHeight: 1.3,
// });

// Description.displayName = 'ToastDescription';

// export type ToastDescriptionElement = React.ElementRef<typeof Description>;
// export type ToastDescriptionOwnProps = ComponentOwnProps<typeof Description> & {
//   heading?: string;
// };
// export type ToastDescriptionVariants = Stitches.VariantProps<
//   typeof Description
// >;

// ////////////////////////////////////////////////////////////////////////////////

// ///////// Toast - Action

// ////////////////////////////////////////////////////////////////////////////////
// const Action = styled(ToastPrimitive.Action, {
//   gridArea: 'action',
// });

// Action.displayName = 'ToastAction';

// export type ToastActionElement = React.ElementRef<typeof Action>;
// export type ToastActionOwnProps = ComponentOwnProps<typeof Action> & {
//   heading?: string;
// };
// export type ToastActionVariants = Stitches.VariantProps<typeof Action>;

// ////////////////////////////////////////////////////////////////////////////////

// ///////// Toast - Provider

// ////////////////////////////////////////////////////////////////////////////////
// export const Provider = ToastPrimitive.Provider;

// Action.displayName = 'ToastProvider';
// export type ToastProviderElement = React.ElementRef<typeof Provider>;
// export type ToastProviderOwnProps = ComponentOwnProps<typeof Provider> & {
//   heading?: string;
// };
// export type ToastProviderVariants = Stitches.VariantProps<typeof Provider>;

// ////////////////////////////////////////////////////////////////////////////////

// ///////// Toast - Close

// ////////////////////////////////////////////////////////////////////////////////
// const Close = styled(ToastPrimitive.Close, {
//   cursor: 'pointer',
// });

// Action.displayName = 'ToastClose';

// export type ToastCloseElement = React.ElementRef<typeof Close>;
// export type ToastCloseOwnProps = ComponentOwnProps<typeof Close> & {
//   heading?: string;
// };
// export type ToastCloseVariants = Stitches.VariantProps<typeof Close>;

// ////////////////////////////////////////////////////////////////////////////////

// ///////// Toast - Root

// ////////////////////////////////////////////////////////////////////////////////

// const Root = styled(ToastPrimitive.Root, {
//   backgroundColor: 'white',
//   boxShadow:
//     'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
//   padding: 15,
//   display: 'grid',
//   gridTemplateAreas: '"title action" "description action"',
//   gridTemplateColumns: 'auto max-content',
//   columnGap: 15,
//   alignItems: 'center'
//   },
//   variants: {
//     sticky: {
//       true: {
//         '@media (prefers-reduced-motion: no-preference)': {
//           '&[data-state="open"]': {
//             animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
//           },
//           '&[data-state="closed"]': {
//             animation: `${hide} 100ms ease-in forwards`,
//           },
//           '&[data-swipe="move"]': {
//             transform: 'translateX(var(--radix-toast-swipe-move-x))',
//           },
//           '&[data-swipe="cancel"]': {
//             transform: 'translateX(0)',
//             transition: 'transform 200ms ease-out',
//           },
//           '&[data-swipe="end"]': {
//             animation: `${swipeOut} 100ms ease-out forwards`,
//           },
//       }

//     },
//     type: {
//       info: {
//         backgroundColor: '$primary',
//         color: 'white',
//       },
//       infoLight: {
//         backgroundColor: '$primary1',
//         color: 'white',
//       },
//     },
//   },
// });

// Root.displayName = 'ToastRoot';

// export type ToastRootElement = React.ElementRef<typeof Root>;
// export type ToastRootOwnProps = ComponentOwnProps<typeof Root> & {
//   title?: string;
//   description?: string;
//   Trigger: React.FC<{ open: boolean; onClick: () => void }>;
//   Actions?: React.ReactElement[];
//   sticky?: boolean;
//   type?: 'string';
// };
// export type ToastRootVariants = Stitches.VariantProps<typeof Root>;

// ////////////////////////////////////////////////////////////////////////////////

// ///////// Toast

// ////////////////////////////////////////////////////////////////////////////////
// export const Toast = Object.assign(Root, {
//   Provider,
//   Title,
//   Description,
//   Action,
//   Close,
//   ViewPort,
// });

// export type ToastProps = React.ComponentProps<typeof Toast>;

// export const ToastComponent = ({
//   Trigger,
//   title,
//   description,
//   sticky,
//   type,
//   duration,
//   Actions,
// }: ToastRootOwnProps) => {
//   const [open, setOpen] = React.useState(false);
//   const timerRef = React.useRef(0);

//   React.useEffect(() => {
//     return () => clearTimeout(timerRef.current);
//   }, []);

//   return (
//     <Toast.Provider swipeDirection="right">
//       <Trigger
//         open={open}
//         onClick={() => {
//           setOpen(false);
//           window.clearTimeout(timerRef.current);
//           timerRef.current = window.setTimeout(() => {
//             setOpen(true);
//           }, 100);
//         }}
//       />
//       <Toast
//         open={open}
//         onOpenChange={setOpen}
//         type={type}
//         duration={duration}
//         sticky={sticky}
//       >
//         {sticky ? (
//           <Space css={{ justifyContent: 'space-between' }}>
//             <Toast.Title>
//               <Text size="s" weight="regular" css={{ color: 'inherit' }}>
//                 {title}
//               </Text>
//             </Toast.Title>
//             <Space>
//               {sticky && Actions && (
//                 <Toast.Action asChild altText="Call to action">
//                   <Space>{Actions}</Space>
//                 </Toast.Action>
//               )}

//               <Toast.Close asChild>
//                 <CloseIcon size="s" color="black" label="" />
//               </Toast.Close>
//             </Space>
//           </Space>
//         ) : (
//           <Space css={{ justifyContent: 'space-between', alignItems: 'start' }}>
//             <Space direction="vertical">
//               <Toast.Title>{title}</Toast.Title>
//               <Toast.Description asChild>{description}</Toast.Description>
//               <Toast.Action asChild altText="Call to action">
//                 <Space>{Actions}</Space>
//               </Toast.Action>
//             </Space>
//             <Toast.Close asChild>
//               <CloseIcon size="s" color="black" label="" />
//             </Toast.Close>
//           </Space>
//         )}
//       </Toast>
//       <Toast.ViewPort sticky={sticky} />
//     </Toast.Provider>
//   );
// };
