import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { Dashboard } from './pages/app/dashboard'
import { Signin } from './pages/auth/signin'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
    ],
  },
  {
    path: '/signin',
    element: <AuthLayout />,
    children: [
      {
        path: '/signin',
        element: <Signin />,
      },
    ],
  },
])

export { router }
