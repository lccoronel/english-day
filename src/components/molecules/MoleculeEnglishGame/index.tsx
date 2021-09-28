import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components';

import AtomDescriptionText from '../../atoms/AtomDescriptionText';
import AtomTitleText from '../../atoms/AtomTitleText';
import { Container } from './styles';

type MoleculeEnglishGameProps = TouchableOpacityProps;

const MoleculeEnglishGame: React.FC<MoleculeEnglishGameProps> = ({
  ...rest
}) => {
  const { colors } = useTheme();

  return (
    <Container {...rest}>
      <AtomTitleText color={colors.black}>English day game</AtomTitleText>
      <AtomDescriptionText color={colors.gray_400} style={{ fontSize: 16 }}>
        name game
      </AtomDescriptionText>

      <AtomDescriptionText
        color={colors.gray_500}
        style={{ marginTop: 15, fontSize: 16 }}
      >
        Amazing, very interesting novel by Sara Taylor. Must read for everyone!
        🎉
      </AtomDescriptionText>
    </Container>
  );
};

export default MoleculeEnglishGame;
