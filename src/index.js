import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/home' ;
import Blog from './pages/blog' ;
import Login from './pages/login';
import Iwanttohire from './pages/iwanttohire';
import Iamrecruitr from './pages/iwanttohire';
import {  HelmetProvider } from 'react-helmet-async';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';






const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>sorry............</h1> ,
  },

  {
    path: "/Login",
    element: <Login />,
  },

  {
    path: "/Blog",
    element: <Blog />,
  },

  {
    path: "/Iwanttohire",
    element: <Iwanttohire />,
  },


  {
    path: "/Iamrecruitr",
    element: <Iamrecruitr />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorkerRegistration.register();

