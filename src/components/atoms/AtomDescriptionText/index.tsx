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
}) => {
  return <Container color={color}>{children}</Container>;
};

export default AtomDescriptionText;
