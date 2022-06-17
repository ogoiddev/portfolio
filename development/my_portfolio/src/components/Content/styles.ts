import styled from 'styled-components'

export const Container = styled.div`
  grid-area: contentarea;
  background-color: ${({ theme }) => theme.main.light};
  
`;

export const SkillSection = styled.div`
  background-color: ${({theme})=> theme.main.primary };
  display: flex;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
  width: 100%;
  
  h2 {
    color: white;
    font-size: 2.3rem;
    margin: 0 23px;
  }

  a {
    display: flex;
    align-items: center;
    margin: 10px;
  }
`;