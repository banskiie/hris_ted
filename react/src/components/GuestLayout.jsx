import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

const GuestLayout = () => {
    const { token } = useStateContext();

    if (token) {
        return <Navigate to="/" />;
    }
    return (
        <div className="w-screen h-screen flex flex-row items-center justify-center bg-slate-200">
            <Outlet />
        </div>
    );
};

export default GuestLayout;
