import React from 'react';
import { Main } from './App_Styled';
import AppRoutes from './routes/index';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Themes } from './StylesColorsToProvider';


function App() {
  return (
    <ThemeProvider theme={ Themes }>
      <BrowserRouter>
        <Main>
          <AppRoutes/>
        </Main>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
