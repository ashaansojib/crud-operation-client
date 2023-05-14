import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './layout/Main.jsx'
import Home from './layout/Home.jsx'
import ServerMethdos from './pages/ServerMethdos'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/server-methods',
        element: <ServerMethdos></ServerMethdos>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
