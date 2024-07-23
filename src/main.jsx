import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import Home from './pages/Home.jsx';
import Config from './pages/Config.jsx';
import Categorias from './pages/Categorias.jsx';
import Calendário from './pages/Calendário.jsx';

const router = createBrowserRouter([

  {
    path:'/',
    element: <App />,
    children: [

      {
        path:'/',
        element: <Home />
      },
      

      {
        path:'category',
        element: <Categorias />
      },
      {
        path:'config',
        element: <Config />
      },
      {
        path:'calendar',
        element: <Calendário />
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
