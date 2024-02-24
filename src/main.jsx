import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Product from './components/Products/Products.jsx'
import Service from './components/Service/Service.jsx'
import Contact from './components/Contact/Contact.jsx'
import WebFont from 'webfontloader';
WebFont.load({
  google: {
    families: ['Roboto', 'Open Sans','Mathilga','San Francisco'] // Add your desired Google Fonts here
  }
});

const router = createBrowserRouter([{
  path: '/',
  element: <Layout/>,
  children:[
    { path: "",
      element: <Home/>
    },
    {
      path:"products",
      element: <Product/>
    },
    {
      path:"service",
      element: <Service/>
    },
    {
      path:"contact",
      element: <Contact/>
    },
    {}
  ]
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
