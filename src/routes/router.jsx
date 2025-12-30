import { createBrowserRouter } from "react-router";
import React from 'react';
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/coverages/Coverage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Rider from "../pages/Rider/Rider";
import SendParcel from "../pages/sendParcel/SendParcel";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children:[
      {
        index:true,
        Component:Home,
      },
      {
        path:'rider',
        element: <PrivateRoutes><Rider></Rider></PrivateRoutes>,
        loader: () => fetch('/warehouses.json').then(res => res.json())
      },
      {
        path:'send-parcel',
        element: <PrivateRoutes><SendParcel></SendParcel></PrivateRoutes>,
        loader:()=>fetch('/warehouses.json').then(res=>res.json())
      },
      {
        path:'/coverage',
        Component:Coverage,
        loader:()=>fetch('/warehouses.json').then(res=>res.json())
      }
    ]
  },
  {
    path:'/',
    Component: AuthLayout,
    children:[
      {
        path:'login',
        Component:Login
      },
      {
        path:'register',
        Component:Register,

      }
    ]
  }
]);

