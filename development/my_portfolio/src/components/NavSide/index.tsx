import React from "react";
import { Container } from './styles';
import logo from '../../images/foto_perfil_ogoiddev.jpg';
import ProjectCards from '../Project_cards/index';

function NavSide() {
    return (
        <Container>
            <img src={logo} alt="Foto Perfil de Diogo" />

            <h2>PROJECTS</h2>

            <ProjectCards/>

            <p> <h1>NAVSIDE</h1> lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adip</p>
        </Container>
    );
}

export default NavSide;