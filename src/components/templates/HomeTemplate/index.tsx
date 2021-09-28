import React from 'react';

import MoleculeHeaderProfile from '../../molecules/MoleculeHeaderProfile/index.';

import { Container } from './styles';

const HomeTemplate: React.FC = () => {
  return (
    <Container>
      <MoleculeHeaderProfile />
    </Container>
  );
};

export default HomeTemplate;
