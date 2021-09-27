import React from 'react';
import { useTheme } from 'styled-components';
import AtomDescriptionText from '../../components/atoms/AtomDescriptionText';

import { Container, TextTitle } from './styles';

const Login: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Container>
      <TextTitle>
        Welcome{'\n'}to our{'\n'}caker lab !
      </TextTitle>

      <AtomDescriptionText color={colors.gray_500}>
        Let`s start with login:
      </AtomDescriptionText>
    </Container>
  );
};

export default Login;
