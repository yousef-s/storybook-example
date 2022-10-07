import React from 'react';
import type { ComponentOwnProps } from '../../types';
import type * as Stitches from '@stitches/react';

import { styled, globalStyles } from '../../styles';
import { Box } from '../../primitives/Box';
import { Space } from '../../primitives/Space/Space';
import { Text } from '../../primitives/Text';
import { Heading } from '../../primitives/Heading';

globalStyles();

////////////////////////////////////////////////////////////////////////////////

const Action = styled(Box);

Action.displayName = 'HeaderAction';

export type ActionElement = React.ElementRef<typeof Action>;
export type ActionOwnProps = ComponentOwnProps<typeof Action>;
export type ActionVariants = Stitches.VariantProps<typeof Action>;

////////////////////////////////////////////////////////////////////////////////

const Description = styled(Text, {
  color: 'grey',
  defaultVariants: {
    weight: 'regular',
    size: 'xs',
  },
});

Description.displayName = 'Header Description';

export type DescriptionElement = React.ElementRef<typeof Description>;
export type DescriptionOwnProps = ComponentOwnProps<typeof Description>;
export type DescriptionVariants = Stitches.VariantProps<typeof Description>;

////////////////////////////////////////////////////////////////////////////////

const Icon = styled(Box, {
  margin: '0 24px',
  justifyContent: 'center',
});

Icon.displayName = 'Header Icon';

export type IconElement = React.ElementRef<typeof Icon>;
export type IconOwnProps = ComponentOwnProps<typeof Icon>;
export type IconVariants = Stitches.VariantProps<typeof Icon>;

////////////////////////////////////////////////////////////////////////////////

const Overline = styled(Text, {
  color: 'grey',
  defaultVariants: {
    weight: 'regular',
    size: 'xs',
  },
});

Overline.displayName = 'Header Overline';

export type OverlineElement = React.ElementRef<typeof Overline>;
export type OverlineOwnProps = ComponentOwnProps<typeof Overline>;
export type OverlineVariants = Stitches.VariantProps<typeof Overline>;

////////////////////////////////////////////////////////////////////////////////
const StyledLine = styled(Box, {
  height: '1px',
  background: '#E5E7EB',
  width: '100%',
});
const Root = styled('div');

Root.displayName = 'Title';

export type RootElement = React.ElementRef<typeof Root>;
export type RootOwnProps = ComponentOwnProps<typeof Root> & {
  size: any;
  weight: any;
};
export type RootVariants = Stitches.VariantProps<typeof Root>;

export const Title = Object.assign(Root, {
  Overline,
  Icon,
  Description,
  Action,
});
export type TitlePrimitiveProps = React.ComponentProps<typeof Title>;

export const PageTitle = ({
  IconComponent,
  OverlineComponent,
  heading,
  description,
  ActionComponent,
}: {
  IconComponent: React.ReactElement;
  OverlineComponent: React.ReactElement;
  heading: string;
  description: string;
  ActionComponent: React.ReactElement;
}) => {
  return (
    <Title>
      <Space direction="vertical" gap="m" css={{ alignItems: 'flex-start' }}>
        <Box css={{ width: '100%' }}>
          <Title.Icon> {IconComponent} </Title.Icon>
          <Box css={{ justifyContent: 'space-between', flex: 1 }}>
            <Space direction="vertical" css={{ alignItems: 'flex-start' }}>
              <Title.Overline>{OverlineComponent}</Title.Overline>
              <Heading size="h2" weight="xBold">
                {heading}
              </Heading>
              <Title.Description size="s" weight="regular">
                {description}
              </Title.Description>
            </Space>
            <Title.Action>
              <Space direction="horizontal">{ActionComponent}</Space>
            </Title.Action>
          </Box>
        </Box>
        <StyledLine />
      </Space>
    </Title>
  );
};
