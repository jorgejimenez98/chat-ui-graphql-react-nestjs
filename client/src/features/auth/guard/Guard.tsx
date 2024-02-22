import React from 'react'

import { excludedRoutes } from '@/lib/constants'
import { useCurrentUser } from '@/hooks'

const Guard: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { data: user } = useCurrentUser()

  return <>
    {excludedRoutes.includes(window.location.pathname)
      ? children
      : user && children
    }
  </>
}

export default Guard
