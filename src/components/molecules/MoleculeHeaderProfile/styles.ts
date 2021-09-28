import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const { height } = Dimensions.get('screen');

export const Container = styled.View`
  margin-top: ${getStatusBarHeight()}px;
  padding: ${height / 20}px 0;
  flex-direction: row;
  align-items: center;
`;

const imgSize = 60;
export const ImageProfile = styled.Image`
  width: ${imgSize}px;
  height: ${imgSize}px;
  border-radius: 50px;
`;

export const ContainerProfileInfo = styled.View`
  margin-left: 10px;
`;

export const ButtonScore = styled.TouchableOpacity`
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray_400};
  border-radius: 10px;
  padding: 13px;
  margin-left: auto;
`;

const imgTrophySize = 30;
export const ImageTrophy = styled.Image`
  width: ${imgTrophySize}px;
  height: ${imgTrophySize}px;
`;
