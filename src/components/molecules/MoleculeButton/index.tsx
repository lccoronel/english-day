import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components';

import AtomDescriptionText from '../../atoms/AtomDescriptionText';
import { Container } from './styles';

interface MoleculeButtonProps extends TouchableOpacityProps {
  title: string;
  color: string;
}

const MoleculeButton: React.FC<MoleculeButtonProps> = ({
  title,
  color,
  ...rest
}) => {
  const { colors } = useTheme();

  return (
    <Container color={color} {...rest}>
      <AtomDescriptionText color={colors.white}>{title}</AtomDescriptionText>
    </Container>
  );
};

export default MoleculeButton;
