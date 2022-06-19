import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 7%;
  height: 100%;
  display: grid;
  grid-template-columns: minmax(233px, 20%) minmax(63%, 2fr) 1fr;
  grid-template-rows: 293px 8fr 27px;
  grid-template-areas:
  "sidenav mainnav mainnav"
  "sidenav contentarea contentarea"
  "sidenav footer footer";
  grid-column-gap: 13px;
  grid-row-gap: 18px;
`;