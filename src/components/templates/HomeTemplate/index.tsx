import React from 'react';
import { useTheme } from 'styled-components';
import AtomTitleTextLarge from '../../atoms/AtomTitleTextLarge';

import MoleculeHeaderProfile from '../../molecules/MoleculeHeaderProfile/index.';

import { Container } from './styles';

const HomeTemplate: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Container>
      <MoleculeHeaderProfile />
      <AtomTitleTextLarge color={colors.black}>Home</AtomTitleTextLarge>
    </Container>
  );
};

export default HomeTemplate;
