import styled from 'styled-components/native';

interface ContainerIconpProps {
  color: string;
}

export const Container = styled.View`
  width: 48%;
  height: 150px;
  background-color: ${({ theme }) => theme.colors.gray_300};
  border-radius: 20px;
  padding: 20px;
  justify-content: space-between;
`;

export const ContainerHeaderCard = styled.View`
  flex-direction: row;
`;

const containerSize = 35;
export const ContainerIcon = styled.View<ContainerIconpProps>`
  width: ${containerSize}px;
  height: ${containerSize}px;
  background-color: ${({ color }) => color};
  border-radius: 7px;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`;

const imgSize = 20;
export const ImageInfoCard = styled.Image`
  width: ${imgSize}px;
  height: ${imgSize}px;
`;
