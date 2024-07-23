import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Otp } from './OTP Components/otpForm.jsx'
import { CourseList } from './COURSE COMPONENT/CourseList.jsx'
import { Batches } from './BATCHES Components/Batches.jsx'
import {createBrowserRouter,RouterProvider}from 'react-router-dom';
const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/otp-form",
    element:<Otp/>
  },
  {
    path:"/course-list",
    element:<CourseList/>
  },
  {
    path:"/batches",
    element:<Batches/>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </React.StrictMode>,
)
