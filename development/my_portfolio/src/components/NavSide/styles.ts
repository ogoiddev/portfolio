import styled from 'styled-components';

export const Container = styled.nav`
  grid-area: sidenav;
  background-color: ${({theme})=> theme.main.secondary };
  display: flex;
  flex-direction: column;
  align-items: center;


  img {
    margin: 20px auto;
    width: 90%;
    object-fit: fit-content;
    clip-path: circle(45% at 50% 43%);
  }
`

export const SkillSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;

`;