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
      <AtomAvatarProfile
        size={60}
        sourceUrl="https://s3-alpha-sig.figma.com/img/4463/56ee/64e9e6c1e587f4d6c02ade2ee5bcc593?Expires=1633910400&Signature=gAddpOMWjmDg4bnVoMdpN6Vu4S-G3VDjtApogCCr8enT8YMknN56ZjPNxmXsMmc-8z1HNyxL2RwIli1F0G6XUSERVAYVW9l94uCV1mF5yxKfa~Y~jcgSyQbbXMDZ8NsUryhJjdGGN1n18fdgz-A7A1swExNMoGYUW49hFILq1YouOM34Cok9Ywg63AsyL7KopYdiBb6f1EW6Mp65u6DZWOlPJavAk95JVsgksbKrEud6XUHOOc0to6uikZ9oNHMq1aqlwG9Y9IZJNz0pApQeX9yKskeknoxnHUojSfe~w4h1pXJEOhmpVozrN0gT24ocHcrw7v2k-iILd11j8xoaYg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
      />

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
