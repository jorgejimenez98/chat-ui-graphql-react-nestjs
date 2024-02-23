import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { useCreateUser, useLogin } from '@/hooks'
import { extractErrorMessage } from '@/lib/utils'

import AuthContainer from '../auth-container/AuthContainer'

const Signup: React.FC = () => {
  const [createUser] = useCreateUser()
  const { login } = useLogin()
  const [error, setError] = useState<string>('')

  const handleSubmit = async (payload: { email: string, password: string }) => {
    try {
      await createUser({
        variables: {
          createUserInput: payload
        }
      })
      await login(payload)
      setError('')
    } catch (error) {
      const errorMessage = extractErrorMessage(error)
      if (errorMessage) setError(errorMessage)
      else setError('Unknown error occured.')
    }
  }

  return (
    <AuthContainer
      submitLabel='Signup'
      onSubmit={handleSubmit}
      error={error}
    >
      <Link to='/login'>
        Login
      </Link>
    </AuthContainer>
  )
}

export default Signup
