import React from 'react';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';

import { RouterProvider } from 'react-router-dom';
import router from './features/routes';

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

const App: React.FC = () =>{
  return (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <Container>
            <RouterProvider router={router}/>
        </Container>
    </ThemeProvider>
  );
}

export default App;
