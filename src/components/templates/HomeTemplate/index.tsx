import React from 'react';
import { useTheme } from 'styled-components';

import AtomTitleTextLarge from '../../atoms/AtomTitleTextLarge';
import MoleculeVotingDayCard from '../../molecules/MoleculeVotingDayCard';
import MoleculeHeaderProfile from '../../molecules/MoleculeHeaderProfile/index.';
import MoleculeInfoCard from '../../molecules/MoleculeInfoCard';

import checkImg from '../../../assets/check.png';
import voteImg from '../../../assets/raise-hand.png';

import { Container, ContainerCardsInfo } from './styles';

const HomeTemplate: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Container>
      <MoleculeHeaderProfile />

      <AtomTitleTextLarge color={colors.black}>Home</AtomTitleTextLarge>

      <MoleculeVotingDayCard />

      <ContainerCardsInfo>
        <MoleculeInfoCard
          color={colors.green_500}
          title="Today votes"
          icon={checkImg}
          amountVotes={13}
        />
        <MoleculeInfoCard
          color={colors.blue_500}
          title="Quarter votes"
          icon={voteImg}
          amountVotes={45}
        />
      </ContainerCardsInfo>
    </Container>
  );
};

export default HomeTemplate;
