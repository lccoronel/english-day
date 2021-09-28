import styled from 'styled-components/native';

interface ImageProfileProps {
  size: number;
}

export const ImageProfile = styled.Image<ImageProfileProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50px;
`;
