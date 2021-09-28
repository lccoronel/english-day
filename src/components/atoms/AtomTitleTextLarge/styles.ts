import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ContainerProps {
  color: string;
}

export const Container = styled.Text<ContainerProps>`
  color: ${({ color }) => color};
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${RFValue(30)}px;
`;
