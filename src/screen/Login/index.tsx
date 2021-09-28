/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import LoginTemplate from '../../components/templates/LoginTemplate';

const Login: React.FC = () => {
  const { navigate } = useNavigation();

  function handleLogin() {
    navigate('home');
  }

  return <LoginTemplate onPressLogin={handleLogin} />;
};

export default Login;
