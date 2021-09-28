import styled from 'styled-components/native';

interface ContainerProps {
  color: string;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  background-color: ${({ color }) => color};
  align-items: center;
  justify-content: center;
  padding: 15px;
  border-radius: 10px;
`;
