import styled from 'styled-components/native';
import Modal from 'react-native-modal';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('screen');

export const Container = styled(Modal)`
  flex: 1;
  margin: 0;
  justify-content: flex-end;
`;

export const Content = styled.View`
  height: ${height / 1.3}px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const ContainerHeaderModal = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ButtonClose = styled.TouchableOpacity`
  margin-left: auto;
`;

const imgSize = 25;
export const ImageClose = styled.Image`
  width: ${imgSize}px;
  height: ${imgSize}px;
`;

export const ContainerInput = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray_300};
  padding: 15px;
  margin-top: 20px;
  margin-bottom: 10px;
  border-radius: 15px;
`;

const loupeSize = 25;
export const ImageInput = styled.Image`
  width: ${loupeSize}px;
  height: ${loupeSize}px;
`;

export const TextInputCaker = styled.TextInput`
  flex: 1;
  margin-left: 15px;
  font-size: 20px;
`;

export const ScrollViewCakers = styled.ScrollView``;
