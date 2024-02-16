import React from 'react'
import { Link } from 'react-router-dom'
import { Link as MuiLink } from '@mui/material'

import AuthContainer from '../auth-container/AuthContainer'


const Login: React.FC = () => {
  return (
    <AuthContainer
      submitLabel='Login'
      onSubmit={async () => {}}
    >
      <Link to='/signup'>
        <MuiLink>Signup</MuiLink>
      </Link>
    </AuthContainer>
  )
}

export default Login
