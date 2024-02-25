import { useState } from 'react'

import { apolloClient } from '@/lib/constants'

interface LoginRequest {
  email: string
  password: string
}

export const useLogin = () => {
  const [error, setError] = useState<string>()

  const login = async (payload: LoginRequest) => {
    const response = await fetch(
      '/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      }
    )
    if (!response.ok) {
      if (response.status === 401) {
        setError('Credentials are not valid.')
      } else {
        setError('Unknown error occured')
      }
      return
    }
    setError('')

    await apolloClient.refetchQueries({ include: 'active' })
  }

  return { login, error }
}
