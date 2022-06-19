import styled from 'styled-components';


export const Container = styled.nav`
  /* background-color: ${({ theme }) => theme.main.primary}; */
  background: rgb(49,49,67);
  background: linear-gradient(35deg, rgba(49,49,67,1) 0%, rgba(27,30,42,1) 65%, rgba(22,33,41,1) 100%);

  grid-area: mainnav;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  .present {
    width: 100%;
    margin-left: 23px;
    margin-bottom: 23px;
    
    
    h1 {
      color: white;
      font-weight: 600;
      font-size: 2rem;
      
      span {
        color: ${({ theme }) => theme.main.contrast};
        font-size: 2rem;
      }
    }

    i {
      color: ${({ theme }) => theme.main.contrast};
    }

  }

  nav {
    display: flex;
    justify-content: flex-end;
    padding: 33px 23px;
    width: 100%;

    a {
      text-decoration: none;
      background-color: ${({ theme }) => theme.main.light};
      border: 1px solid ${({ theme }) => theme.main.contrast};
      border-radius: 3px;
      
      display: flex;
      height: fit-content;
      align-items: center;
      
      width: 103px;
      margin: 0 13px;
      position: relative;
      padding: 0 3px;
      
      &:hover, :focus {
        box-shadow: inset 10em 0 0 0 ${({ theme }) => theme.main.contrast};
        border: 1px solid ${({ theme }) => theme.main.back};
        transition: 0.4s;
      }

      span {
        color: ${({ theme }) => theme.main.primary};
        font-size: 0.9rem;
        font-weight: 800;
        width: 100%;
        text-align: center;
      }

    }
  }

`;
