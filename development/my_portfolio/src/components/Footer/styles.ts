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
  
  span, strong {

    font-size: 0.9rem;
  }
  
  
`