import styled from 'styled-components';

const Container = styled.nav`
  grid-area: sidenav;
  background-color: #1f1fff;
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

export default Container;