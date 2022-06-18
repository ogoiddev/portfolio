import React from "react";
import { Container } from './styles';
import logo from '../../images/foto_perfil_ogoiddev.jpg';

function NavSide() {
    return (
        <Container>
            <section className="Sides-0">
                <img src={logo} alt="Foto Perfil de Diogo" />
                    <h3>Diogo</h3>
                    <span>Web Developer</span>
            </section>

            <section className="Sides-1">
                <i>Solucionando problemas</i>

                    <span><span className="arrob">@</span>ogoiddev</span>
                    <span><span className="arrob">@</span>tryber</span>
                
            </section>
            
            
            <section className="Sides-2">
                <span>Education:</span>
                <p>Web Developer</p>
                <p>Marketing/Advertising</p>

                <span>Age:</span><p>37</p>
                <span>Home:</span><p>Ubirata/Parana/Brasil</p>
                <span>Hobbie:</span><p>Acoustic Guitar</p>
            </section>


            
        </Container>
    );
}

export default NavSide;