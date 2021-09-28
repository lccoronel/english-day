import React from 'react';
import { ImageProps } from 'react-native';
import { useTheme } from 'styled-components';

import AtomDescriptionText from '../../atoms/AtomDescriptionText';
import AtomTitleText from '../../atoms/AtomTitleText';
import AtomTitleTextLarge from '../../atoms/AtomTitleTextLarge';
import {
  Container,
  ContainerIcon,
  ContainerHeaderCard,
  ImageInfoCard,
} from './styles';

interface MoleculeInfoCardProps {
  color: string;
  title: string;
  icon: ImageProps;
  amountVotes: number;
}

const MoleculeInfoCard: React.FC<MoleculeInfoCardProps> = ({
  color,
  title,
  icon,
  amountVotes,
}) => {
  const { colors } = useTheme();

  return (
    <Container>
      <ContainerHeaderCard>
        <ContainerIcon color={color}>
          <ImageInfoCard source={icon} />
        </ContainerIcon>

        <AtomDescriptionText
          color={colors.black}
          style={{ width: 70, fontSize: 16 }}
        >
          {title}
        </AtomDescriptionText>
      </ContainerHeaderCard>

      <AtomTitleTextLarge color={colors.black}>
        {amountVotes}
      </AtomTitleTextLarge>
    </Container>
  );
};

export default MoleculeInfoCard;
