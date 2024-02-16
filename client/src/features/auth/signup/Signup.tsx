import React from 'react'
import { Link } from 'react-router-dom'
import { Link as MuiLink } from '@mui/material'

import AuthContainer from '../auth-container/AuthContainer'

const Signup: React.FC = () => {
  return (
    <AuthContainer
      submitLabel='Signup'
      onSubmit={async () => {}}
    >
      <Link to='/login'>
        <MuiLink>Login</MuiLink>
      </Link>
    </AuthContainer>
  )
}

export default Signup
