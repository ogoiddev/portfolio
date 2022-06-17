import React from "react";
import { Container } from './styles';
import logo from '../../images/foto_perfil_ogoiddev.jpg';

function NavSide() {
    return (
        <Container>
            <img src={logo} alt="Foto Perfil de Diogo" />

            <section className="Sides-1">
                <div>
                    <span>Diogo</span>
                    <span>Web Developer</span>
                </div>
                <div>
                    <span><span className="arrob">@</span>ogoiddev</span>
                    <span><span className="arrob">@</span>tryber</span>
                </div>

                <i>Solucionando problemas</i>
            </section>


            
        </Container>
    );
}

export default NavSide;