import React from 'react'
import { Link } from 'react-router-dom'
import { Link as MuiLink } from '@mui/material'
import { useLogin } from 'hooks'

import AuthContainer from '../auth-container/AuthContainer'


const Login: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { login, error } = useLogin()

  return (
    <AuthContainer
      submitLabel='Login'
      onSubmit={(payload) => login(payload)}
    >
      <Link to='/signup'>
        <MuiLink>Signup</MuiLink>
      </Link>
    </AuthContainer>
  )
}

export default Login
