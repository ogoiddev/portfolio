import styled from 'styled-components';

export const Container = styled.nav`
  margin: 0 5%;
  height: 100vh;
  display: grid;
  grid-template-columns: minmax(133px, 17%) minmax(63%, 2fr) 1fr;
  grid-template-rows: minmax(333px, 4fr) 8fr 0.5fr;
  grid-template-areas:
  "sidenav mainnav mainnav"
  "sidenav contentarea contentarea"
  "sidenav footer footer";
  grid-column-gap: 23px;
  grid-row-gap: 23px;
  
`;