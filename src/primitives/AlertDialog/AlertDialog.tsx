import type * as React from 'react';
import type * as Stitches from '@stitches/react';
import { keyframes } from '@stitches/react';

import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

import type { ComponentOwnProps } from '../../types';

import { styled } from '../../styles';
import { Box } from '../Box';
import { Button } from '../Button';

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

////////////////////////////////////////////////////////////////////////////////

///////// Alert Dialog - Overlay

////////////////////////////////////////////////////////////////////////////////

const Overlay = styled(AlertDialogPrimitive.Overlay, {
  backgroundColor: '$dark3',
  position: 'fixed',
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
});

Overlay.displayName = 'AlertOverlay';

export type AlertOverlayElement = React.ElementRef<typeof Overlay>;
export type AlertOverlayOwnProps = ComponentOwnProps<typeof Overlay>;
export type AlertOverlayVariants = Stitches.VariantProps<typeof Overlay>;

////////////////////////////////////////////////////////////////////////////////

///////// Alert Dialog - Content

////////////////////////////////////////////////////////////////////////////////

const StyledContent = styled(AlertDialogPrimitive.Content, {
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '500px',
  maxHeight: '85vh',
  padding: 25,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
  '&:focus': { outline: 'none' },
});
function Content({ children, ...props }: any) {
  return (
    <AlertDialogPrimitive.Portal>
      <Overlay />
      <StyledContent {...props}>{children}</StyledContent>
    </AlertDialogPrimitive.Portal>
  );
}

Content.displayName = 'AlertContent';

export type AlertContentElement = React.ElementRef<typeof Content>;
export type AlertContentOwnProps = ComponentOwnProps<typeof Content> & {
  heading?: string;
};
export type AlertContentVariants = Stitches.VariantProps<typeof Content>;

////////////////////////////////////////////////////////////////////////////////

///////// Alert - Title

////////////////////////////////////////////////////////////////////////////////
const Title = styled(AlertDialogPrimitive.Title, {
  margin: 0,
  color: 'black',
  fontSize: 17,
  fontWeight: 500,
});

Title.displayName = 'AlertTitle';

export type AlertTitleElement = React.ElementRef<typeof Title>;
export type AlertTitleOwnProps = ComponentOwnProps<typeof Title> & {
  heading?: string;
};
export type AlertTitleVariants = Stitches.VariantProps<typeof Title>;

////////////////////////////////////////////////////////////////////////////////

///////// Alert - Description

////////////////////////////////////////////////////////////////////////////////
const Description = styled(AlertDialogPrimitive.Description, {
  margin: 0,
  color: 'black',
  fontSize: 17,
  fontWeight: 500,
});

Description.displayName = 'AlertDescription';

export type AlertDescriptionElement = React.ElementRef<typeof Description>;
export type AlertDescriptionOwnProps = ComponentOwnProps<typeof Description> & {
  heading?: string;
};
export type AlertDescriptionVariants = Stitches.VariantProps<
  typeof Description
>;

////////////////////////////////////////////////////////////////////////////////

///////// Alert - Trigger

////////////////////////////////////////////////////////////////////////////////
export const Trigger = AlertDialogPrimitive.Trigger;

export type AlertTriggerElement = React.ElementRef<typeof Trigger>;
export type AlertTriggerOwnProps = ComponentOwnProps<typeof Trigger> & {
  heading?: string;
};
export type AlertTriggerVariants = Stitches.VariantProps<typeof Trigger>;
////////////////////////////////////////////////////////////////////////////////

///////// Alert - Action

////////////////////////////////////////////////////////////////////////////////
export const Action = AlertDialogPrimitive.Action;

export type AlertActionElement = React.ElementRef<typeof Action>;
export type AlertActionOwnProps = ComponentOwnProps<typeof Action> & {
  heading?: string;
};
export type AlertActionVariants = Stitches.VariantProps<typeof Action>;
////////////////////////////////////////////////////////////////////////////////

///////// Alert - Cancel

////////////////////////////////////////////////////////////////////////////////
export const Cancel = AlertDialogPrimitive.Cancel;

export type AlertCancelElement = React.ElementRef<typeof Cancel>;
export type AlertCancelOwnProps = ComponentOwnProps<typeof Cancel> & {
  heading?: string;
};
export type AlertCancelVariants = Stitches.VariantProps<typeof Cancel>;

////////////////////////////////////////////////////////////////////////////////

///////// Alert - Root

////////////////////////////////////////////////////////////////////////////////
export const Root = AlertDialogPrimitive.Root;

export type AlertRootElement = React.ElementRef<typeof Root>;
export type AlertRootOwnProps = ComponentOwnProps<typeof Root> & {
  title?: string;
  description?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
  Trigger: React.ReactElement;
};
export type AlertRootVariants = Stitches.VariantProps<typeof Root>;

////////////////////////////////////////////////////////////////////////////////

///////// Alert

////////////////////////////////////////////////////////////////////////////////
export const Alert = Object.assign(Root, {
  Overlay,
  Title,
  Description,
  Action,
  Cancel,
  Content,
  Trigger,
});

export type AlertProps = React.ComponentProps<typeof Alert>;

export const AlertDialog = ({
  title,
  description,
  onCancel,
  onConfirm,
  Trigger,
}: AlertRootOwnProps) => (
  <Alert>
    <>
      <Alert.Trigger asChild>{Trigger}</Alert.Trigger>
      <Alert.Content>
        <>
          <Alert.Title>{title}</Alert.Title>
          <Alert.Description>{description}</Alert.Description>
          <Box css={{ justifyContent: 'flex-end' }}>
            <Alert.Cancel asChild>
              <Button
                onClick={onCancel}
                destructive
                type="outlined"
                size="xSmall"
              >
                Cancel
              </Button>
            </Alert.Cancel>
            <Alert.Action asChild>
              Confirm
              <Button onClick={onConfirm} type="primary" size="xSmall">
                Label
              </Button>
            </Alert.Action>
          </Box>
        </>
      </Alert.Content>
    </>
  </Alert>
);
