import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ContainerProps {
  color: string;
}

const { width } = Dimensions.get('screen');

export const Container = styled.Text<ContainerProps>`
  color: ${({ color }) => color};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  margin-top: ${width / 3}px;
`;
