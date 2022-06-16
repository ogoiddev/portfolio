import React from 'react';
import logo from './images/foto_perfil_ogoiddev.jpg';
import {Main} from './App_Styled';
import AppRoutes from './routes/index';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Main className='App'>
        <img src={logo} width='150px' className='App-logo' alt='logo' />
        <AppRoutes/>
      </Main>
    </BrowserRouter>
  );
}

export default App;
