import React from 'react';
import { Linking } from 'react-native';
import { useTheme } from 'styled-components';

import AtomTitleTextLarge from '../../atoms/AtomTitleTextLarge';
import MoleculeVotingDayCard from '../../molecules/MoleculeVotingDayCard';
import MoleculeHeaderProfile from '../../molecules/MoleculeHeaderProfile/index.';
import MoleculeInfoCard from '../../molecules/MoleculeInfoCard';
import MoleculeEnglishGame from '../../molecules/MoleculeEnglishGame';

import checkImg from '../../../assets/check.png';
import voteImg from '../../../assets/raise-hand.png';

import { Container, ContainerCardsInfo, ScroolViewHome } from './styles';

const HomeTemplate: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Container>
      <MoleculeHeaderProfile />
      <ScroolViewHome showsVerticalScrollIndicator={false}>
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

        <MoleculeEnglishGame
          onPress={() =>
            Linking.openURL(
              'https://docs.google.com/spreadsheets/d/1FcR5d1L9cMC14s30ymXWB-f6_OCY0ZvjOCv2pT11zW8/edit#gid=204179261',
            )
          }
        />
      </ScroolViewHome>
    </Container>
  );
};

export default HomeTemplate;
