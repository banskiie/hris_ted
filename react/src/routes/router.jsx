import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "../views/Login";
import Dashboard from "../views/Dashboard";
import Attendance from "../views/Attendance";
import NotFound from "../views/NotFound";
import DefaultLayout from "../components/DefaultLayout";
import GuestLayout from "../components/GuestLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Navigate to="/attendance" />,
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/attendance",
                element: <Attendance />,
            },
        ],
    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);
export default router;
