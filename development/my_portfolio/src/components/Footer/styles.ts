import styled from 'styled-components'

export const Container = styled.footer`
  grid-area: footer;
  background-color: ${({ theme }) => theme.main.contrast };
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  bottom: 0;

  z-index: 133;

  .upp {
    position: absolute;
    max-width: fit-content;
    
    
    right: -41px;
    bottom: 30px;
    z-index: 485;

    .bi-arrow-up-square-fill {
      height: 40px !important;
      width: 40px !important;
      color: ${({ theme }) => theme.main.primary};
      
      :hover {
        background-color: ${({ theme }) => theme.main.contrast};
        transition: 0.6s;
      }
    }
  }
  
  span, strong {

    font-size: 0.7rem;
  }
  
  
`