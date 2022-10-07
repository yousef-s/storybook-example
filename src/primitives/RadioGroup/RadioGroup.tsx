import type * as React from 'react';
import type * as Stitches from '@stitches/react';

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import type { ComponentOwnProps } from '../../types';

import { styled } from '../../styles';
import { Box, Text, Space } from '../../primitives';

const Root = styled(RadioGroupPrimitive.Root, Box);
Root.displayName = 'RadioGroup';
type RadioItem = {
  id: string;
  value: string;
  label: string;
  heading: string;
  disabled: boolean;
  onChange?: (value: string) => void;
};
export type RadioGroupRootOwnProps = ComponentOwnProps<typeof Root> & {
  options: RadioItem[];
  selected: string;
};
export type RadioGroupRootVariants = Stitches.VariantProps<typeof Root>;

const Indicator = styled(RadioGroupPrimitive.Indicator, Box, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  position: 'relative',

  '&::after': {
    content: '""',
    display: 'block',
    borderRadius: '50%',
    bg: '$primary',
    height: 8,
    width: 8,
  },
});
Indicator.displayName = 'RadioGroupIndicator';

export type RadioGroupIndicatorElement = React.ElementRef<typeof Indicator>;
export type RadioGroupIndicatorOwnProps = ComponentOwnProps<typeof Indicator>;
export type RadioGroupIndicatorVariants = Stitches.VariantProps<
  typeof Indicator
>;

const Radio = styled(RadioGroupPrimitive.Item, Box, {
  all: 'unset',
  backgroundColor: 'white',
  width: 16,
  height: 16,
  borderRadius: '100%',
  border: '1px solid $dark1',
  '&[data-state="checked"]': {
    border: '1px solid $primary',
  },
});
Radio.displayName = 'RadioGroupRadio';

export type RadioGroupRadioOwnProps = ComponentOwnProps<typeof Radio>;
export type RadioGroupRadioVariants = Stitches.VariantProps<typeof Radio>;

export const RadioGroup = Object.assign(Root, { Radio, Indicator });

export type RadioGroupProps = React.ComponentProps<typeof RadioGroup>;

export const RadioGroupWithLabel = ({
  options,
  selected,
  ...rest
}: RadioGroupRootOwnProps) => {
  return (
    <RadioGroup defaultValue={selected}>
      <Space gap="m" direction="vertical">
        {options.map(({ heading, id, onChange, label, value }) => {
          return (
            <Space
              key={id}
              gap="regular"
              css={{
                alignItems: heading ? 'flex-start' : 'center',
                justifyContent: 'flex-start',
              }}
            >
              <RadioGroup.Radio
                {...rest}
                value={value}
                name={id}
                onValueChange={onChange}
              >
                <RadioGroup.Indicator />
              </RadioGroup.Radio>

              <Space
                direction="vertical"
                gap="regular"
                css={{ alignItems: 'start', lineHeight: '24px' }}
              >
                {heading && (
                  <Text
                    size="s"
                    weight="semiBold"
                    htmlFor={id}
                    css={{ whiteSpace: 'nowrap', color: '$dark3' }}
                  >
                    {heading}
                  </Text>
                )}

                {label && (
                  <Text
                    size="s"
                    weight="regular"
                    htmlFor={id}
                    css={{
                      whiteSpace: 'nowrap',
                      color: '$grey',
                      alignItems: 'center',
                    }}
                  >
                    {label}
                  </Text>
                )}
              </Space>
            </Space>
          );
        })}
      </Space>
    </RadioGroup>
  );
};
