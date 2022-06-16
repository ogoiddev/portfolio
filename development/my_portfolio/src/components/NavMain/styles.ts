import styled from 'styled-components';


export const Container = styled.nav`
  background-color: #9f9a;
  display: grid;
  grid-area: mainnav;
  grid-template-columns: auto 1fr auto;

  nav a + a {
    margin-left: 15px;
  }
`
