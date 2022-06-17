import React from "react";
import { Container } from './styles';

function ProjectCards() {
  return (
    <Container >
      {Array.from({ length: 5 }).map((element, i) =>
        <div className="card" key={i}>
          <strong>{i}</strong>
        </div>
      )
      }
    </Container>
  );
}


export default  ProjectCards
