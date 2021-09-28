import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin: 15px 0;
`;

export const ContainerInfoCaker = styled.View`
  margin-left: 15px;
`;

const containerSize = 70;
export const ContainerEmptyAvatar = styled.View`
  width: ${containerSize}px;
  height: ${containerSize}px;
  background-color: ${({ theme }) => theme.colors.blue_300};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;

const addSize = 30;
export const ImageAdd = styled.Image`
  width: ${addSize}px;
  height: ${addSize}px;
`;
