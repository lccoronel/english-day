import React from 'react';
import { useTheme } from 'styled-components';

import AtomDescriptionText from '../../atoms/AtomDescriptionText';
import AtomTitleText from '../../atoms/AtomTitleText';
import { Container } from './styles';

const MoleculeEnglishGame: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Container>
      <AtomTitleText color={colors.black}>English day game</AtomTitleText>
      <AtomDescriptionText color={colors.gray_400} style={{ fontSize: 16 }}>
        name game
      </AtomDescriptionText>

      <AtomDescriptionText color={colors.gray_500} style={{ marginTop: 15 }}>
        Amazing, very interesting novel by Sara Taylor. Must read for everyone!
        🎉
      </AtomDescriptionText>
    </Container>
  );
};

export default MoleculeEnglishGame;
