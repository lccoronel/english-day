import React from 'react';
import { Platform, TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components';

import AtomAvatarProfile from '../../atoms/AtomAvatarProfile';
import AtomDescriptionText from '../../atoms/AtomDescriptionText';
import AtomTitleText from '../../atoms/AtomTitleText';
import addImg from '../../../assets/add.png';

import {
  Container,
  ContainerInfoCaker,
  ContainerEmptyAvatar,
  ImageAdd,
} from './styles';

interface MoleculeChooseCakerButtonProps extends TouchableOpacityProps {
  name: string;
  position: string;
  sourceUrl: string;
}

const MoleculeChooseCakerButton: React.FC<MoleculeChooseCakerButtonProps> = ({
  name,
  position,
  sourceUrl,
  ...rest
}) => {
  const { colors } = useTheme();

  return (
    <Container {...rest}>
      {sourceUrl ? (
        <AtomAvatarProfile size={60} sourceUrl={sourceUrl} />
      ) : (
        <ContainerEmptyAvatar>
          <ImageAdd source={addImg} />
        </ContainerEmptyAvatar>
      )}

      <ContainerInfoCaker>
        {sourceUrl ? (
          <>
            <AtomTitleText color={colors.black}>{name}</AtomTitleText>
            <AtomDescriptionText
              color={colors.gray_400}
              style={{ fontSize: Platform.OS === 'ios' ? 18 : 16 }}
            >
              {position}
            </AtomDescriptionText>
          </>
        ) : (
          <AtomDescriptionText color={colors.gray_400} style={{ fontSize: 18 }}>
            Choose a caker
          </AtomDescriptionText>
        )}
      </ContainerInfoCaker>
    </Container>
  );
};

export default MoleculeChooseCakerButton;
