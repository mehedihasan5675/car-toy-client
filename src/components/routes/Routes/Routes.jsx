import React from 'react';
import {
  createBrowserRouter
} from "react-router-dom";
import MainLayout from '../../layouts/mainLayout/MainLayout';
import Home from '../../pages/Home/Home/Home';
import ViewDetails from '../../pages/ViewdetailsPage/ViewDetails';
import Login from '../../pages/login/Login';
import Register from '../../pages/register/Register';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'register',
          element:<Register></Register>
        },
        {
          path:'view-details/:_id',
          element:<ViewDetails></ViewDetails>,
          loader:({params})=>fetch(`http://localhost:5000/alltoys/id/${params._id}`)
        }
      ]
    },
  ]);
export default router;