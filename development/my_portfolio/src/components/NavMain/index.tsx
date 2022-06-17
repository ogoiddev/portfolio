import React from 'react';
import { Container } from './styles'

function NavMain() {
    return (
        <Container>
            <div className="present">
            <h1>{"I'm, Diogo Martini Pantaleao"}</h1>
            <h1><span>Frontend</span> Developer</h1>
            <i>{'"Honest in small things, is not a small thing"'}</i>
            </div>
            
            <nav>
                <a target="_blank" href="https://www.linkedin.com/in/ogoiddev/" rel="noreferrer">Linkedin</a>
                <a target="_blank" href="https://github.com/ogoiddev" rel="noreferrer">Github</a>
                <a target="_blank" href="contact">Contato</a>
            </nav>
        </Container>
    );
}

export default NavMain;