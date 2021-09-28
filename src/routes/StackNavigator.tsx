import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screen/LoginScreen';
import BottomNavigator from './BottomNavigator';

const { Navigator, Screen } = createNativeStackNavigator();

const StackNavigator: React.FC = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="login" component={LoginScreen} />
      <Screen name="lab" component={BottomNavigator} />
    </Navigator>
  );
};

export default StackNavigator;
