import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './Router/router.jsx'
import { RouterProvider } from 'react-router'
import FirebaseAuthProvider from './Contexts/FirebaseAuthProvider.jsx'
import { Toaster } from 'react-hot-toast'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirebaseAuthProvider>
      <RouterProvider router={router} />
      <Toaster />
    </FirebaseAuthProvider>
     
  </StrictMode>,
)
