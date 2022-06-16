import React from "react";
import { useNavigate } from 'react-router-dom';

function Hall() {
  const navigate = useNavigate();
  return <div>
    <button
      type="button"
      onClick={() => navigate("../home", { replace: true })} // ver sobre replace??
    >
    {'Clicando neste botao voce tem acesso a pasta profissional privada de Diogo Martini Pantaleao. Deseja continuar? ... clique aqui! ;)'}
      </button>
    </div>
}

export default Hall;