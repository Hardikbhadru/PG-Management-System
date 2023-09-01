import {createBrowserRouter, } from "react-router-dom";
import HomePage from "./pages/HomePage";
import React from 'react';
export const router = createBrowserRouter([
    {
      path: "/",
      element:  <HomePage/>,
      children: [
        {
            path: "/about",
            element:  <h1>mlohohnhon</h1>,
        },
      ],
    },
  ]);