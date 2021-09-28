import React from 'react';
import { Image, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screen/HomeScreen';
import homeImg from '../assets/home.png';
import disabledHomeImg from '../assets/disabled-home.png';
import MenuScreen from '../screen/MenuScreen';
import menuImg from '../assets/menu.png';
import disabledMenuImg from '../assets/disabled-menu.png';
import ProfileScreen from '../screen/ProfileScreen';
import userImg from '../assets/user.png';
import disabledUserImg from '../assets/disabled-user.png';

const { Navigator, Screen } = createBottomTabNavigator();

const BottomNavigator: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          elevation: 0,
          shadowOpacity: 0,
          height: Platform.OS === 'ios' ? 70 : 60,
          paddingTop: Platform.OS === 'ios' ? 20 : 0,
        },
        tabBarIconStyle: {
          width: 15,
          height: 15,
        },
      }}
    >
      <Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ size, focused }) => {
            return (
              <Image
                source={focused ? homeImg : disabledHomeImg}
                width={size}
                height={size}
              />
            );
          },
        }}
      />
      <Screen
        name="menu"
        component={MenuScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ size, focused }) => {
            return (
              <Image
                source={focused ? menuImg : disabledMenuImg}
                width={size}
                height={size}
              />
            );
          },
        }}
      />
      <Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ size, focused }) => {
            return (
              <Image
                source={focused ? userImg : disabledUserImg}
                width={size}
                height={size}
              />
            );
          },
        }}
      />
    </Navigator>
  );
};

export default BottomNavigator;
