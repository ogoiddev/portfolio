import styled from 'styled-components';

export const Main = styled.nav`
  background-color: ${({ theme }) => theme.main.light};
  grid-template: 1fr;
  min-width: 1003px;
`;