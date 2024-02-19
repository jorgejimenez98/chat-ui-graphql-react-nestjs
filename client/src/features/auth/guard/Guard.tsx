import { useCurrentUser } from 'hooks'
import { excludedRoutes } from 'lib/constants/excluded-routes'
import React from 'react'

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
