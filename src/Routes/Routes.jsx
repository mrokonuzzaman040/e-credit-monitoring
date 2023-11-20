import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from '../Components/Home/Home';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';
import Step2 from '../Components/Register/Step2';
import Step3 from '../Components/Register/Step3';
import Dashboard from '../LayOut/Dashboard/Dashboard';
import App from "../App";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>,
            },
            {
                path: 'register/step2',
                element: <Step2></Step2>
            },
            {
                path: 'register/step3',
                element: <Step3></Step3>
            }
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'dashboard',
                element: <h2>Dashboard</h2>
            },
        ]
    }
]);