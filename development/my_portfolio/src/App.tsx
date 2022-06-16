import React from 'react';
import { Main } from './App_Styled';
import AppRoutes from './routes/index';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Main>
        <AppRoutes/>
      </Main>
    </BrowserRouter>
  );
}

export default App;
