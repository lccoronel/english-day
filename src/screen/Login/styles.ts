import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const { width } = Dimensions.get('screen');

export const Container = styled.View`
  flex: 1;
  padding: 0 25px;
`;

export const TextTitle = styled.Text`
  color: ${({ theme }) => theme.colors.blue_500};
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${RFValue(50)}px;
  margin-top: ${width / 4}px;
`;
