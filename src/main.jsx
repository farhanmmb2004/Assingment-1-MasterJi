import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Otp } from './otpForm.jsx'
import { CourseList } from './CourseList.jsx'
import { Batches } from './Batches.jsx'
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
