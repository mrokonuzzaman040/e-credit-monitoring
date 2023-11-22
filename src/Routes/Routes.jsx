import {
    createBrowserRouter,
} from "react-router-dom";


import Home from "../LayOut/Home/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Step2 from "../Components/Register/Step2";
import Step3 from "../Components/Register/Step3";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Dashboard from "../LayOut/Dashboard/Dashboard";

import PrivateRoute from "../Routes/PrivateRoute";
import AdminRoute from "../Routes/AdminRoute";

import AdminHome from "../LayOut/Dashboard/Components/AdminHome";
import AllUsers from "../LayOut/Dashboard/Components/ManageUsers/AllUsers";
import App from "../App";
import AddReview from "../LayOut/Dashboard/Components/Review/AddReview";
import ManageReview from "../LayOut/Dashboard/Components/Review/ManageReview";
import UsersInfo from "../LayOut/Dashboard/Components/UsersInfo/UsersInfo";
import EditReview from "../LayOut/Dashboard/Components/Review/EditReview";
import UserHome from "../LayOut/User/UserHome";
import CreditScore from "../LayOut/User/Components/CreditSocre/CreditScore";
import PaymentHistory from "../LayOut/User/Components/PaymentHistory/PaymentHistory";
import ScoreHistory from "../LayOut/User/Components/ScoreHistory/ScoreHistory";

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
            },
            {
                // error page
                path: '*',
                element: <ErrorPage></ErrorPage>,
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
            // Admin Routs
            {
                path: 'adminHome',
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>,
            },
            {
                path: 'allUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>,
            },
            {
                path: 'addReviews',
                element: <AdminRoute><AddReview></AddReview></AdminRoute>,
            },
            {
                path: 'manageReviews',
                element: <AdminRoute><ManageReview></ManageReview></AdminRoute>,
            },
            {
                path: 'userInfos',
                element: <AdminRoute><UsersInfo></UsersInfo></AdminRoute>,
            },

            // User Routs
            {
                path: 'userHome',
                element: <PrivateRoute><UserHome></UserHome></PrivateRoute>,
            },
            {
                path: 'credit-score',
                element: <PrivateRoute><CreditScore></CreditScore></PrivateRoute>,
            },
            {
                path: 'score-monitor',
                element: <PrivateRoute><h2>Score Monitor</h2></PrivateRoute>,
            },
            {
                path: 'paymentHistory',
                element: <PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute>,
            },
            {
                path: 'scoretHistory',
                element: <PrivateRoute><ScoreHistory></ScoreHistory></PrivateRoute>,
            },
        ]
    }
]);