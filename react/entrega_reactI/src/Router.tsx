import { React } from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import HomePage from "./pages/Home/Home";


const router = ([    
    {
        path: "/src/pages/Home",
        element: <HomePage />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element:  <Register />
    },
    
])

export default router;