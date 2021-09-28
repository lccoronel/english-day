import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ContainerCardsInfo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

export const ScroolViewHome = styled.ScrollView``;
