import React from 'react';
import {
  createBrowserRouter
} from "react-router-dom";
import MainLayout from '../../layouts/mainLayout/MainLayout';
import AddToy from '../../pages/AddToy/AddToy';
import AllToys from '../../pages/AllToys/AllToys';
import Home from '../../pages/Home/Home/Home';
import MyToy from '../../pages/MyToy/MyToy';
import ViewDetails from '../../pages/ViewdetailsPage/ViewDetails';
import Login from '../../pages/login/Login';
import Register from '../../pages/register/Register';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

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
          element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/alltoys/id/${params._id}`)
        },
        {
          path:'alltoys',
          element:<AllToys></AllToys>,
          loader:()=>fetch(`http://localhost:5000/alltoys`)
        },
        {
          path:'addtoy',
          element:<PrivateRoute><AddToy></AddToy></PrivateRoute>
        },
        {
          path:'mytoys',
          element:<PrivateRoute><MyToy></MyToy></PrivateRoute>
        }
      ]
    },
  ]);
export default router;