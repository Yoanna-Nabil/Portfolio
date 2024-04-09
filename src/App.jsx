import React from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home'
import Portfolio from './Components/Portfolio/Portfolio'
import Error from './Components/Error/Error'

export default function App() {

    let routes = createHashRouter([
      {path:"" ,element:<Layout/> , children:[
        {path:"about" , element:<About/>},
        {index:true , element:<Home/>},
        {path:"contact" , element:<Contact/>},
        {path:"portfolio" , element:<Portfolio/>},
        {path:"*" , element:<Error/>},
      ] },
    ])
    return <RouterProvider router={routes} ></RouterProvider>
}
