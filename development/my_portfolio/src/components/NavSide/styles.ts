import styled from 'styled-components';

export const Container = styled.nav`
  background-color: ${({ theme }) => theme.main.back};
  
  grid-area: sidenav;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  box-shadow: 0 0 23px 0 ${({ theme }) => theme.main.primary}75;
  
  width: 213px;

  .ii {
    font-size: 14px;
  }

  height: 100%;
  overflow-y: hidden;
  
  position: fixed;
  top: 0;
  
  animation: drop-down 2s ;
  
  @keyframes drop-down{
    0%  {
      height: 13%;
    }
    100%  {
      height: 100%;
    }
  };
  

  .Sides-0 {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 33px;
    width: 85%;
    
  img {
    width: 70%;
    clip-path: circle(45% at 50% 43%);
    animation:scale-up-horizontal-left 2s;
  }

    h6 {
      font-weight: 800;
    }

    .zap {
      display: flex;
      justify-content: center;
      position: relative;

    }
    
    .float{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 45px;
      height: 45px;
      background-color: ${({ theme }) => theme.main.contrast};
      color: ${({ theme }) => theme.main.back};
      border-radius: 50%;
      text-align: center;
      font-size: 30px;
      box-shadow: 2px 2px 3px #999;
      z-index:100;
      position: absolute;
      bottom: 23px;
      right: 33px;
      text-decoration: none;
      
      :hover {
        transform: scale(1.2);
        filter: saturate(200%);
        transition: ease-in-out 0.3s;
      }
  
    }
  }


  .Sides-1 {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 33px;
    width: 85%;
    margin-top: 13px;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.main.primary};

      :hover {
        font-weight: 800;
      }
    }
    
    .arrob {
      color: ${({ theme }) => theme.main.contrast};
      font-weight: 800;
    };
  }

  .Sides-2 {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 85%;
    margin-top: 33px;
    
    p {
      width: 100%;
      overflow: hidden;
      margin: 0;
    }
    
    span {
      background-color: ${({ theme }) => theme.main.primary};
      color: ${({ theme }) => theme.main.contrast};
      
      width: fit-content;
      margin: 5px 0;
    
      padding: 1px 5px;
      border-radius: 3px;
      font-size: 0.9rem;
      font-weight: 800;
    }

  }

  .socials {
    display: flex;
    width: 55%;
    justify-content: space-evenly;
    margin: 53px 0;

    
    a { 
        height: 33px;
        width: 33px;
        
        
        svg {
          width: 100%;
          height: 100%;
          color: ${({ theme})=> theme.main.primary};

          
        }
        .bi-linkedin {
          :hover {

            fill: #0960B7;
            filter: brightness(1.2);
          }
        }

        .bi-github {
          :hover {
            border-radius: 50%;
            border: 3px solid;
            background-color: black;
            fill: white;
          }
        }
      }
  }
`;
