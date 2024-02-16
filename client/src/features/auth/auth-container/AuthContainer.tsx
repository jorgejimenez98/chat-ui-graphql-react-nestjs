import React, { useState } from 'react'
import { Button, Stack, TextField } from '@mui/material'

interface AuthContainerProps {
    submitLabel: string
    onSubmit: (credentials: {
        email: string, password: string
    }) => Promise<void>
    children: React.ReactNode
}

const AuthContainer: React.FC<AuthContainerProps> = ({ submitLabel, onSubmit, children }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Stack
      spacing={3}
      sx={{
        height: '100vh',
        maxWidth: {
          xs: '70%',
          md: '30%'
        },
        margin: '0 auto',
        justifyContent: 'center'
      }}
    >
      {/* Email */}
      <TextField
        type='email'
        label='Email'
        variant='outlined'
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      {/* Pasword */}
      <TextField
        type='password'
        label='Password'
        variant='outlined'
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      {/* Submit Button */}
      <Button
        variant='contained'
        onClick={() => onSubmit({ email, password })}
      >
        {submitLabel}
      </Button>

      {/* Children */}
      {children}
    </Stack>
  )
}

export default AuthContainer
