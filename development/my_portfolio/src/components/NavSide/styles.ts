import styled from 'styled-components';

export const Container = styled.nav`
  grid-area: sidenav;
  background-color: ${({theme})=> theme.main.light };
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 33px 0 #55555585;


  img {
    margin: 20px auto;
    width: 90%;
    object-fit: fit-content;
    clip-path: circle(45% at 50% 43%);
  }
`

export const SkillSection = styled.div`
  background-color: ${({theme})=> theme.black };
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  
  a { 
    margin: 10px;
  }
`;