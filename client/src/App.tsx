import React from 'react';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';

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
          <h1>Dark model Home</h1>
        </Container>
    </ThemeProvider>
  );
}

export default App;
