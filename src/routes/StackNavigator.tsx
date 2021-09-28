import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screen/Login';
import Home from '../screen/Home';

const { Navigator, Screen } = createNativeStackNavigator();

const StackNavigator: React.FC = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="login" component={Login} />
      <Screen name="home" component={Home} />
    </Navigator>
  );
};

export default StackNavigator;
