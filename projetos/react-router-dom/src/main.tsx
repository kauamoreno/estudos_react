import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// 1 - Configurando o router
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

import Home from './routes/Home.tsx';
import Contact from './routes/Contact.tsx';
import ErrorPage from './routes/ErrorPage.tsx';
import ContactDetail from './routes/ContactDetail.tsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />
//   },
//   {
//     path: 'contact',
//     element: <Contact />
//   }
// ]);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // 3 - Pagina de erro 
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      // 5 - nested routes - Identificador unico
      {
        // : significa que é um dado dinamico
        path: '/contact/:id',
        element: <ContactDetail />
      },
      // 7 - navigate para paginas não existentes
      {
        path: '/oldcontact',
        element: <Navigate to={'/contact'}/>
      }
    ]
  }, 
]);

// Apagar <App /> e colocar <RouterProvider router={router}/>
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
