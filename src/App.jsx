import { useState } from 'react'
import React from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './component/Home/Signup'
import Login from './component/Home/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CompanyProfilePage from './pages/CompanyProfilePage'
import Findjob from './component/Job/Findjob'
import Applayout from './Applayout'
import Jobdetail from './component/Job/Jobdetail'
import Homepage from './pages/Homepage'

function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Applayout/>,
      children:[
        {
          path:'/',
          element:<Homepage/>
        },{
          path:'/signup',
          element:<Signup/>
        },{
          path:'/login',
          element:<Login/>
        },{
          path:'/job',
          element:<Findjob/>
        },{
          path:'/job/:detail',
          element:<Jobdetail/>
        },{
          path:'/company',
          element:<CompanyProfilePage/>
        }
      ]
    },
  ])

 
 return <RouterProvider router={router}/>
}

export default App
