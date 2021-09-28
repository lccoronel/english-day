import React from 'react';
import { Dimensions } from 'react-native';
import { useTheme } from 'styled-components';

import starImg from '../../../assets/star.png';
import AtomDescriptionText from '../../atoms/AtomDescriptionText';
import AtomTitleText from '../../atoms/AtomTitleText';
import {
  Container,
  ContainerContentCard,
  ContainerHeaderCard,
  ContainerIconType,
  ImageStar,
  ContainerVote,
  BorderVote,
} from './styles';

const MoleculeVotingDayCard: React.FC = () => {
  const { colors } = useTheme();
  const { width } = Dimensions.get('screen');

  return (
    <Container>
      <ContainerHeaderCard>
        <ContainerIconType>
          <ImageStar source={starImg} />
        </ContainerIconType>

        <AtomTitleText color={colors.white}>Voting Day</AtomTitleText>
      </ContainerHeaderCard>

      <ContainerContentCard>
        <AtomDescriptionText
          color={colors.white}
          style={{ width: width / 1.7 }}
        >
          Hey caker, today is voting day for english day 🎉
        </AtomDescriptionText>

        <BorderVote>
          <ContainerVote>
            <AtomTitleText color={colors.blue_500} style={{ fontSize: 15 }}>
              vote
            </AtomTitleText>
          </ContainerVote>
        </BorderVote>
      </ContainerContentCard>
    </Container>
  );
};

export default MoleculeVotingDayCard;
