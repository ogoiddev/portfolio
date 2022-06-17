import styled from 'styled-components'

export const Container = styled.footer`
  grid-area: footer;
  background-color: ${({ theme }) => theme.main.contrast };
  display: flex;
  justify-content: center;
  align-items: center;
  
  span, strong {

    font-size: 1.5rem;
  }
  
  
`