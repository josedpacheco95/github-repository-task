import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  
import Login from '../../screens/Login';
import Commits from '../../screens/Commits';
import Register from '../../screens/Register';
import RequiredAuth from '../../middleware/authentication';
import { NavBar } from '../navBar';
const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/commits' ,
        element: <RequiredAuth><NavBar><Commits /></NavBar></RequiredAuth>
    }
  ]);


export const Routing = () => {
    return <RouterProvider router={router} />
}

export default Routing;