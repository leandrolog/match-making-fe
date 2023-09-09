import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Match from "./pages/match/Match";
import Profile from "./pages/profile/Profile";
import SideBar from "./components/sideBar/SideBar";

const router = createBrowserRouter([
    {
        path: "/",
        element:
            <>
                <SideBar/>
                <Home/>
            </>
    },
    {
        path: "/match",
        element:
            <>
                <SideBar/>
                <Match/>
            </>
    },
    {
        path: "/profile",
        element:
            <>
                <SideBar/>
                <Profile/>
            </>
    },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

