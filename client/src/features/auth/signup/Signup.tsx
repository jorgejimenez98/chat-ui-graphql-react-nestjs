import React from 'react'
import AuthContainer from '../auth-container/AuthContainer'
import { Link } from 'react-router-dom'
import { Link as MuiLink } from '@mui/material';

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