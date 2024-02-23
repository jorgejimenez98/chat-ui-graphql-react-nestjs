import React from 'react'
import { Link } from 'react-router-dom'

import { useLogin } from '@/hooks'

import AuthContainer from '../auth-container/AuthContainer'


const Login: React.FC = () => {
  const { login, error } = useLogin()

  return (
    <AuthContainer
      submitLabel='Login'
      onSubmit={(payload) => login(payload)}
      error={error}
    >
      <Link to='/signup'>
        Signup
      </Link>
    </AuthContainer>
  )
}

export default Login
