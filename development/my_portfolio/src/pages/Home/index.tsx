import React from "react";
import { NavMain, NavSide, Content, Footer } from "../../components/index";
import { Container } from './styles';

function Home() {
  return <Container>
    <NavMain />
    <NavSide />
    <Content />

    <Footer />
    
  </Container>;
}

export default Home