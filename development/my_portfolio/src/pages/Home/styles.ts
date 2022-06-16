import styled from 'styled-components';

export const Container = styled.nav`
  display: grid;
  grid-template-columns: minmax(163px, 30%) 2fr 1fr;
  grid-template-areas:
		"logo mainnav mainnav"
		"sidenav contentarea contentarea"
		"sidenav footer footer";
`;