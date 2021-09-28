import styled from 'styled-components/native';
import { Dimensions, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const { height } = Dimensions.get('screen');

export const Container = styled.View`
  flex: 1;
  padding: ${getStatusBarHeight() + 30}px 20px 0;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ContainerScroll = styled.View`
  height: ${Platform.OS === 'ios' ? height / 1.5 : height / 1.6}px;
  margin: 15px 0;
`;

export const ScrollViewCakers = styled.ScrollView``;
