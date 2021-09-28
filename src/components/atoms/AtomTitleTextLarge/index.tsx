import React, { ReactNode } from 'react';
import { TextProps } from 'react-native';

import { Container } from './styles';

interface AtomTitleTextLargeProps extends TextProps {
  children: ReactNode;
  color: string;
}

const AtomTitleTextLarge: React.FC<AtomTitleTextLargeProps> = ({
  children,
  color,
  ...rest
}) => {
  return (
    <Container color={color} {...rest}>
      {children}
    </Container>
  );
};

export default AtomTitleTextLarge;
