/* eslint-disable react/react-in-jsx-scope */
import { createBrowserRouter } from 'react-router-dom'

import { Login, Signup } from './auth'
import { Home } from './home'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> }
])

export default router
