import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  padding: ${getStatusBarHeight() + 30}px 20px 0;
  background-color: ${({ theme }) => theme.colors.white};
`;
