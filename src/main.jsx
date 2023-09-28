import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import mycreateroute from './Router/Routr'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ mycreateroute}></RouterProvider>
  
  </React.StrictMode>,
)
