/* eslint-disable no-console */
import React from 'react'
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { RouterProvider } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import { apolloClient } from 'lib/constants'
import router from 'features/routes'
import { Guard } from 'features'

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
          <Guard>
            <RouterProvider router={router} />
          </Guard>
        </Container>
      </ThemeProvider>

    </ApolloProvider>
  )
}

export default App
