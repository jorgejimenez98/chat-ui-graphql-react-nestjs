import React from 'react'
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { RouterProvider } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import router from 'features/routes'
import { apolloClient } from 'lib/constants'

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

const App: React.FC = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <Container>
          <RouterProvider router={router} />
        </Container>
      </ThemeProvider>

    </ApolloProvider>
  )
}

export default App
