import '@/styles/global.css'

import { Toaster } from 'sonner'
import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';

import { ThemeProvider } from '@/components/theme/theme-provider'
import { router } from '@/routes'
import { queryClient } from './lib/react-query';

function App() {
  return (
    <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
      <Toaster richColors />
      <QueryClientProvider client={queryClient} >
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export { App }
