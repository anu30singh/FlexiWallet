import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import LandingPage from './components/LandingPage.jsx'
import AboutUs from './components/AboutUs.jsx'
import FAQ from './components/FAQ.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout/>,
    children:[
      {
        path: "",
        element: <LandingPage/>
      },
      {
        path: "about", 
        element: <AboutUs/>
      },
      {
        path: "faq",
        element: <FAQ/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
