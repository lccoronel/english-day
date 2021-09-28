import React from 'react';
import AtomAvatarProfile from '../../atoms/AtomAvatarProfile';

import { Container } from './styles';

const MoleculeChooseCakerButton: React.FC = () => {
  return (
    <Container>
      <AtomAvatarProfile size={60} />
    </Container>
  );
};

export default MoleculeChooseCakerButton;
