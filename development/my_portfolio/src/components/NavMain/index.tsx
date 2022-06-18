import React from 'react';
import { Container } from './styles'

function NavMain() {
    return (
        <Container>
            <div className="present">
            <h1>{"I'm, Diogo Martini Pantaleão"}</h1>
            <h1><span>Web</span> Developer</h1>
            <i>{'"Honest in small things, is not a small thing"'}</i>
            </div>
            
            <nav>
                <a data-back="Linkedin" data-front="Linkedin" target="_blank" href="https://www.linkedin.com/in/ogoiddev/" rel="noreferrer"><span>Linkedin</span></a>
                <a data-back="Github" data-front="Github" target="_blank" href="https://github.com/ogoiddev" rel="noreferrer"><span>Github</span></a>
                <a data-back="Contact me" data-front="Contact me" target="_blank" href="contact"><span>Contact me</span></a>
            </nav>
        </Container>
    );
}

export default NavMain;