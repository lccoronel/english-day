import React from 'react';
import { useTheme } from 'styled-components';

import AtomTitleTextLarge from '../../atoms/AtomTitleTextLarge';
import MoleculeChooseCakerButton from '../../molecules/MoleculeChooseCakerButton';

import { Container } from './styles';

const VoteTemplate: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Container>
      <AtomTitleTextLarge color={colors.black}>
        Choose some caker for our english day
      </AtomTitleTextLarge>

      <MoleculeChooseCakerButton />
    </Container>
  );
};

export default VoteTemplate;
