import React from 'react'
import { Link } from 'react-router-dom'
import { Link as MuiLink } from '@mui/material'

import AuthContainer from '../auth-container/AuthContainer'

import { useLogin } from '@/hooks'

const Login: React.FC = () => {
  const { login, error } = useLogin()

  return (
    <AuthContainer
      submitLabel='Login'
      onSubmit={(payload) => login(payload)}
      error={error}
    >
      <Link to='/signup'>
        <MuiLink>Signup</MuiLink>
      </Link>
    </AuthContainer>
  )
}

export default Login
