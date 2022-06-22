import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Container } from "./styles";

function NavMain() {
  return (
    <Container id="things">
      <nav>
        <a
          data-back="Linkedin"
          data-front="Linkedin"
          target="_blank"
          href="https://www.linkedin.com/in/ogoiddev/"
          rel="noreferrer"
        >
          <span>Linkedin</span>
        </a>
        <a
          data-back="Github"
          data-front="Github"
          target="_blank"
          href="https://github.com/ogoiddev"
          rel="noreferrer"
        >
          <span>Github</span>
        </a>

        <AnchorLink href="#contact" className="down">
          <span>Contact me</span>
        </AnchorLink>
      </nav>

      <div className="present">
        <h1>{"I'm Diogo Martini Pantaleão"}</h1>
        <h1>
          <span>Web</span> Developer
        </h1>
        <i>{'"Honest in small things, is not a small thing"'}</i>
      </div>
    </Container>
  );
}

export default NavMain;
