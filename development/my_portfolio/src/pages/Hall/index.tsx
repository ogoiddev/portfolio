import React from "react";
import { useNavigate } from 'react-router-dom';
import logo from '../../images/foto_perfil_ogoiddev.jpg';

function Hall() {
  const navigate = useNavigate();
  return <div>
    <img src={logo} width='150px' className='App-logo' alt='logo' />
    <button
      type="button"
      onClick={() => navigate("../home", { replace: true })} // ver sobre replace??
    >
    {'Clicando neste botao voce tem acesso a pasta profissional privada de Diogo Martini Pantaleao. Deseja continuar? ... clique aqui! ;)'}
      </button>
    </div>
}

export default Hall;