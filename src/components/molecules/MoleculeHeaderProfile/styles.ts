import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Dimensions } from 'react-native';

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
