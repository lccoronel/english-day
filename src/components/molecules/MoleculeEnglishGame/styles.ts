import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray_300};
  margin-top: 20px;
  border-radius: 20px;
  padding: 20px;
`;
