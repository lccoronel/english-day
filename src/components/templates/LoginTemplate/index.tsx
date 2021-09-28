import React from 'react';
import { Dimensions, Platform } from 'react-native';
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

interface LoginTemplateProps {
  onPressLogin: () => void;
}

const LoginTemplate: React.FC<LoginTemplateProps> = ({ onPressLogin }) => {
  const { colors } = useTheme();

  const { height } = Dimensions.get('screen');

  return (
    <Container>
      <TextTitle>
        Welcome{'\n'}to our{'\n'}caker lab !
      </TextTitle>

      <AtomDescriptionText
        color={colors.gray_500}
        style={{ marginTop: Platform.OS === 'ios' ? height / 6 : height / 8 }}
      >
        Let`s start with login:
      </AtomDescriptionText>

      <ButtonSocialLogin onPress={onPressLogin}>
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
