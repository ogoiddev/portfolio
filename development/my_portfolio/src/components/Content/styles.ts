import styled from 'styled-components'

export const Container = styled.div`
  grid-area: contentarea;
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    align-self: center;
    margin: 30px;
    font-size: 2rem;
  }
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
    font-size: 1.3rem;
    margin: 0 23px;
  }

  a {
    display: flex;
    align-items: center;
    margin: 10px;
  }
`;