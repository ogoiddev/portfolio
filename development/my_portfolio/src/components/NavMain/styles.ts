import styled from 'styled-components';


export const Container = styled.nav`
  background-color: ${({theme})=> theme.main.primary };
  display: grid;
  grid-area: mainnav;
  grid-template-columns: 1fr auto;

  .present {
    align-self: flex-end;
    width: 700px;
    margin-left: 23px;
  }

  h1 {
    color: white;
    font-size: 63px;
    line-height: 60px;
  }

  span { 
    color: ${({ theme }) => theme.main.contrast };
    font-size: 63px;
  }

  i {
    font-size: 18px;
    color: ${({theme})=> theme.main.contrast };
  }

  nav a + a {
    text-decoration: none;
    appearance: none;
    margin-left: 15px;
  }

  a { }
`
