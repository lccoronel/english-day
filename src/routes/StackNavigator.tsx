import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screen/LoginScreen';
import BottomNavigator from './BottomNavigator';
import VoteScreen from '../screen/VoteScreen';

const { Navigator, Screen } = createNativeStackNavigator();

const StackNavigator: React.FC = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="login" component={LoginScreen} />
      <Screen name="lab" component={BottomNavigator} />
      <Screen name="vote" component={VoteScreen} />
    </Navigator>
  );
};

export default StackNavigator;
