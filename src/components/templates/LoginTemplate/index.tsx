import React from 'react';
import { Dimensions } from 'react-native';
import { useTheme } from 'styled-components';

import AtomDescriptionText from '../../atoms/AtomDescriptionText';
import googleImg from '../../../assets/google.png';
import cklImg from '../../../assets/ckl.png';
import {
  Container,
  TextTitle,
  ButtonSocialLogin,
  ImageGoogle,
  ImageCKL,
} from './styles';

const LoginTemplate: React.FC = () => {
  const { colors } = useTheme();

  const { width } = Dimensions.get('screen');

  return (
    <Container>
      <TextTitle>
        Welcome{'\n'}to our{'\n'}caker lab !
      </TextTitle>

      <AtomDescriptionText
        color={colors.gray_500}
        style={{ marginTop: width / 3 }}
      >
        Let`s start with login:
      </AtomDescriptionText>

      <ButtonSocialLogin>
        <ImageGoogle source={googleImg} />
        <AtomDescriptionText color={colors.gray_500}>
          CONTINUE WITH GOOGLE
        </AtomDescriptionText>
      </ButtonSocialLogin>

      <ImageCKL source={cklImg} />
    </Container>
  );
};

export default LoginTemplate;
