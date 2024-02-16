/* eslint-disable react/react-in-jsx-scope */
import { createBrowserRouter } from 'react-router-dom'

import { Login, Signup } from './auth'

const router = createBrowserRouter([
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> }
])

export default router
