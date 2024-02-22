import React, { useEffect, useState } from 'react'
import { Button, Stack, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { useCurrentUser } from '@/hooks'

interface AuthContainerProps {
    submitLabel: string
    onSubmit: (credentials: {
        email: string, password: string
    }) => Promise<void>
    children: React.ReactNode
    error?: string
}

const AuthContainer: React.FC<AuthContainerProps> = (props) => {
  const { submitLabel, onSubmit, children, error } = props
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { data: user } = useCurrentUser()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) navigate('/')
  }, [user, navigate])

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
        error={!!error}
        helperText={error}
      />

      {/* Pasword */}
      <TextField
        type='password'
        label='Password'
        variant='outlined'
        value={password}
        error={!!error}
        helperText={error}
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
