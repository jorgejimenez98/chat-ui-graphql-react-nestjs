import { API_URL, apolloClient } from 'lib/constants'
import { useState } from 'react'

interface LoginRequest {
  email: string
  password: string
}


export const useLogin = () => {
  const [error, setError] = useState<boolean>()

  const login = async (payload: LoginRequest) => {
    const response = await fetch(
      `${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      }
    )
    if (!response.ok) {
      setError(true)
      return
    }
    setError(false)

    await apolloClient.refetchQueries({ include: 'active' })
  }

  return { login, error }
}
