import styled from 'styled-components';

export const Container = styled.nav`
  grid-area: sidenav;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 23px 0 ${({ theme }) => theme.main.primary}75;
  padding: 15px;

  h1 {
    font-size: 2rem;
    font-weight: 300;
  }

  img {
    margin-top: 83px;
    width: 60%;
    object-fit: fit-content;
    clip-path: circle(45% at 50% 43%);
  }

  .Sides-1 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 163px;

    div:nth-child(1) {
      display: flex;
      flex-direction: column;
      align-items: center;
      align-self: center;
      
      span:first-child {
        font-weight: 800;
      };
    }

    
    .arrob {
      color: ${({ theme }) => theme.main.contrast}
    }
    
    div:nth-child(2) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 33%;
    };

    i {
        font-weight: 800;
    }
  }
`;
