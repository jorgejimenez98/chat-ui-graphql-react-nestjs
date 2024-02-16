import React from 'react'
import AuthContainer from '../auth-container/AuthContainer'
import { Link } from 'react-router-dom'
import { Link as MuiLink } from '@mui/material';


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