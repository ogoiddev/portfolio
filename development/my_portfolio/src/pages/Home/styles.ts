import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 5%;
  height: 100%;
  display: grid;
  grid-template-columns: minmax(253px, 17%) minmax(63%, 2fr) 1fr;
  grid-template-rows: 333px 8fr 33px;
  grid-template-areas:
  "sidenav mainnav mainnav"
  "sidenav contentarea contentarea"
  "sidenav footer footer";
  grid-column-gap: 23px;
  grid-row-gap: 23px;
  
`;