/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import LoginTemplate from '../../components/templates/LoginTemplate';

const LoginScreen: React.FC = () => {
  const { navigate } = useNavigation();

  function handleLogin() {
    navigate('lab');
  }

  return <LoginTemplate onPressLogin={handleLogin} />;
};

export default LoginScreen;
