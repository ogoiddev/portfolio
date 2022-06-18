import styled from 'styled-components';

export const Container = styled.nav`
  grid-area: sidenav;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 23px 0 ${({ theme }) => theme.main.primary}75;
  padding: 15px;

  img {
    width: 70%;
    clip-path: circle(45% at 50% 43%);
  }

  .Sides-0 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .Sides-1 {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 133px;
    width: 80%;
    
    .arrob {
      color: ${({ theme }) => theme.main.contrast};
    };
    
    i {
      font-weight: 800;
      align-self: center;
    }
  }

  .Sides-2 {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 80%;
    margin-top: 33px;
    
    p {
      padding: 0 9px;
    }
    
    span {
      background-color: ${({ theme }) => theme.main.primary};
      color: ${({ theme }) => theme.main.contrast};
      padding: 0 9px;
      width: fit-content;
      margin: 5px 0;
    }

    p, span {
      padding: 3px 7px;
      border-radius: 3px;
    }

  }

`;
