import React from 'react'
import { Link } from 'react-router-dom'
import { Link as MuiLink } from '@mui/material'
import { useCreateUser } from 'hooks'

import AuthContainer from '../auth-container/AuthContainer'

const Signup: React.FC = () => {
  const [createUser] = useCreateUser()

  return (
    <AuthContainer
      submitLabel='Signup'
      onSubmit={async ({ email, password }) => {
        await createUser({
          variables: {
            createUserInput: {
              email, password
            }
          }
        })
      }}
    >
      <Link to='/login'>
        <MuiLink>Login</MuiLink>
      </Link>
    </AuthContainer>
  )
}

export default Signup
