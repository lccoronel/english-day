import React, { ReactNode } from 'react';
import { TextProps } from 'react-native';

import { Container } from './styles';

interface AtomDescriptionTextProps extends TextProps {
  children: ReactNode;
  color: string;
}

const AtomDescriptionText: React.FC<AtomDescriptionTextProps> = ({
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

export default AtomDescriptionText;
