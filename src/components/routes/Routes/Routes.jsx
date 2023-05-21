import React from 'react';
import {
  Navigate,
  createBrowserRouter
} from "react-router-dom";
import MainLayout from '../../layouts/mainLayout/MainLayout';
import AddToy from '../../pages/AddToy/AddToy';
import AllToys from '../../pages/AllToys/AllToys';
import Blog from '../../pages/Blog/Blog';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import Home from '../../pages/Home/Home/Home';
import EditModal from '../../pages/MyToy/EditModal/EditModal';
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
          loader:({params})=>fetch(`https://server-cars-toy.vercel.app/alltoys/id/${params._id}`)
        },
        {
          path:'alltoys',
          element:<AllToys></AllToys>,
          loader:()=>fetch(`https://server-cars-toy.vercel.app/alltoys`)
        },
        {
          path:'addtoy',
          element:<PrivateRoute><AddToy></AddToy></PrivateRoute>
        },
        {
          path:'mytoys',
          element:<PrivateRoute><MyToy></MyToy></PrivateRoute>
        }
        ,{
          path:'editToy/:id',
          element:<EditModal></EditModal>,
          loader:({params})=>fetch(`https://server-cars-toy.vercel.app/alltoys/id/${params.id}`)
        },
        {
          path:'blog',
          element:<Blog></Blog>
        },
        {
          path:'*',
          element:<Navigate to="error"></Navigate>
        }
      ]
    },
    ,
    {
      path:'error',
      element:<ErrorPage></ErrorPage>,
      
    }
  ]);
export default router;