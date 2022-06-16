import React from 'react';
import { Container } from './styles'

function NavMain() {
    return (
        <Container>
            <h1>NAVMAIN</h1>
            {'Ola, eu sou Diogo Martini Pantaleao)'}
            <nav>
                <a target="_blank" href="https://www.linkedin.com/in/ogoiddev/" rel="noreferrer">Linkedin</a>
                <a target="_blank" href="https://github.com/ogoiddev" rel="noreferrer">Github</a>
                <a target="_blank" href="contact">Contato</a>
            </nav>
        </Container>
    );
}

export default NavMain;