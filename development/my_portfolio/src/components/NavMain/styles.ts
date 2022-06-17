import styled from 'styled-components';


export const Container = styled.nav`
  background-color: ${({ theme }) => theme.main.primary};
  display: grid;
  grid-area: mainnav;
  grid-template-columns: 1fr auto;
  grid-template-areas: 
  "nav nav"
  "title title";
  
  .present {
    align-self: flex-end;
    width: 700px;
    margin-left: 23px;
    margin-bottom: 23px;

    
    h1 {
      color: white;
      font-size: 2.7rem;
      font-weight: 600;
      
      span { 
        color: ${({ theme }) => theme.main.contrast};
        font-size: 3rem;
      }
    }

    i {
      color: ${({ theme }) => theme.main.contrast};
    }

  }

  nav {
    grid-area: nav;
    display: flex;
    justify-content: flex-end;
    min-width: 233;
    padding: 23px;
    position: relative;

    a {
      background-color: ${({ theme }) => theme.main.light};
      border: 1px solid ${({ theme }) => theme.main.contrast};
      border-radius: 9px;
      display: flex;
      height: fit-content;
      align-items: center;
      text-decoration: none;
      width: 133px;
      margin: 13px;
      position: relative;
      outline: 0;
      
      &:hover, :focus {
        box-shadow: inset 10em 0 0 0 ${({ theme }) => theme.main.contrast};
        border: 1px solid ${({ theme }) => theme.main.back};
        transition: 0.4s;
      }

      span {
        color: ${({ theme }) => theme.main.primary};
        font-size: 1.1rem;
        font-weight: 800;
        padding: 3px 23px;
        width: 100%;
        text-align: center;
      }




    }
  }

`;
