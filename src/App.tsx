import React from 'react';
import { ThemeProvider, useTheme } from 'styled-components/native';
import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

import Routes from './routes';
import theme from './styles/theme';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor="#115EFB" />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
