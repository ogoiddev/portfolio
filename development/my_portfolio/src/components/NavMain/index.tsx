import React from 'react';
import { Container } from './styles'

function NavMain() {
    return (
        <Container>
            <h1>NAVMAIN</h1>
            {'Ola, eu sou Diogo Martini Pantaleao)'}
            <nav>
                <a href="https://www.linkedin.com/in/ogoiddev/">Linkedin</a>
                <a href="https://github.com/ogoiddev">Github</a>
                <a href="contact">Contato</a>
            </nav>
        </Container>
    );
}

export default NavMain;