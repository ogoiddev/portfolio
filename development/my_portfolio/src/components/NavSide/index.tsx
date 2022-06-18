import React from "react";
import { Container } from './styles';
import logo from '../../images/foto_perfil_ogoiddev.jpg';

function NavSide() {
    return (
        <Container>
            <section className="Sides-0">
                <div className="zap">

                    <img src={logo} alt="Foto Perfil de Diogo" />
                    
                    <a href="https://api.whatsapp.com/send?phone=5544991423390&text=Chat%20me%20%3A)" className="float" target="blank">
                        <i className="fa fa-whatsapp"></i>
                    </a>

                </div>
                
                    <h3>Diogo</h3>
                    <span>Web Developer</span>
            </section>

            <section className="Sides-1">
                <i>Solucionando problemas</i>

                <span><span className="arrob">@</span><a
                    href="https://github.com/ogoiddev"
                    target="blank"
                >ogoiddev</a></span>
                <span><span className="arrob">@</span><a
                    href="https://www.betrybe.com"
                    target="blank"
                >tryber</a></span>
                
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