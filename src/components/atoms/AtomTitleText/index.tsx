import React, { ReactNode } from 'react';
import { TextProps } from 'react-native';

import { Container } from './styles';

interface AtomTitleTextProps extends TextProps {
  children: ReactNode;
  color: string;
}

const AtomTitleText: React.FC<AtomTitleTextProps> = ({
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

export default AtomTitleText;
