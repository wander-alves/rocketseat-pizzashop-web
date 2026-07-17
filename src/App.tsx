import '@/styles/global.css'

import { Toaster } from 'sonner'
import { RouterProvider } from 'react-router-dom'

import { router } from '@/routes'

function App() {
  return (
    <>
      <Toaster richColors />
      <RouterProvider router={router} />
    </>
  )
}

export { App }
