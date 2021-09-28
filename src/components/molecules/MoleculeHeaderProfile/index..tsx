import React from 'react';
import { useTheme } from 'styled-components';

import AtomDescriptionText from '../../atoms/AtomDescriptionText';
import AtomTitleText from '../../atoms/AtomTitleText';
import trophyImg from '../../../assets/trophy.png';
import AtomAvatarProfile from '../../atoms/AtomAvatarProfile';
import {
  ButtonScore,
  Container,
  ContainerProfileInfo,
  ImageTrophy,
} from './styles';

const MoleculeHeaderProfile: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Container>
      <AtomAvatarProfile size={60} />

      <ContainerProfileInfo>
        <AtomTitleText color={colors.black}>John Doe</AtomTitleText>

        <AtomDescriptionText color={colors.gray_400} style={{ fontSize: 16 }}>
          Software Engineer
        </AtomDescriptionText>
      </ContainerProfileInfo>

      <ButtonScore>
        <ImageTrophy source={trophyImg} />
      </ButtonScore>
    </Container>
  );
};

export default MoleculeHeaderProfile;
