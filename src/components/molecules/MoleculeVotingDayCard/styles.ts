import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.blue_500};
  margin-top: 20px;
  border-radius: 20px;
  padding: 20px;
`;

export const ContainerHeaderCard = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 23px;
`;

const containerSize = 45;
export const ContainerIconType = styled.View`
  width: ${containerSize}px;
  height: ${containerSize}px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const imgSize = 20;
export const ImageStar = styled.Image`
  width: ${imgSize}px;
  height: ${imgSize}px;
`;

export const ContainerContentCard = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const voteSize = 45;
export const ContainerVote = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  width: ${voteSize}px;
  height: ${voteSize}px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

const borderSize = 55;
export const BorderVote = styled.View`
  background-color: rgba(255, 255, 255, 0.3);
  width: ${borderSize}px;
  height: ${borderSize}px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;
