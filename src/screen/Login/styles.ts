import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const { height, width } = Dimensions.get('screen');

export const Container = styled.View`
  flex: 1;
  padding: 0 30px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const TextTitle = styled.Text`
  color: ${({ theme }) => theme.colors.blue_500};
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${RFValue(50)}px;
  margin-top: ${height / 10}px;
`;

export const ButtonSocialLogin = styled.TouchableOpacity`
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray_400};
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 13px;
  margin-top: 20px;
`;

const iconSize = 30;
export const ImageGoogle = styled.Image`
  width: ${iconSize}px;
  height: ${iconSize}px;
`;

export const ImageCKL = styled.Image`
  width: 100%;
  height: ${iconSize}px;
  margin-top: ${height / 4}px;
`;
