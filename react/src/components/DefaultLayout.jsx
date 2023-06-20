import React from "react";
import { Outlet, Navigate, NavLink } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import c1blogo from "../assets/img/c1b.png";
import IconHome from "../assets/icons/IconHome";
import IconCalendar from "../assets/icons/IconCalendar";
import IconExit from "../assets/icons/IconExit";

const DefaultLayout = () => {
    const { user, token, setToken } = useStateContext();

    const onLogout = (ev) => {
        ev.preventDefault();
        setToken(null);
    };

    if (!token) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="bg-slate-50">
            <div className="drawer drawer-open">
                <input
                    id="my-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content">
                    {/* DRAWER CONTENT */}
                    <div className="navbar bg-secondary text-white flex flex-row justify-between px-8">
                        <div className="normal-case text-xl font-bold font-roboto-condensed">
                            HRIS
                        </div>
                        <div className="flex gap-3">
                            <div className="normal-case text-xl font-roboto-condensed">
                                Hello, {user.name}!
                            </div>
                            <div className="avatar placeholder">
                                <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                                    <span className="text-md font-roboto-condensed">
                                        AA
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Outlet />
                </div>
                <div className="drawer-side bg-slate-200">
                    <label htmlFor="my-drawer" className="drawer-overlay">
                        <img src={c1blogo} className="w-48 mx-auto my-6" />
                    </label>
                    {/* SIDEBAR CONTENT */}
                    <ul className="menu p-4 w-80 text-xl h-full text-primary  font-roboto-condensed">
                        <li>
                            <NavLink
                                to="/dashboard"
                                className="hover:bg-secondary hover:text-white"
                            >
                                <IconHome />
                                Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/attendance"
                                className="hover:bg-secondary hover:text-white"
                            >
                                <IconCalendar />
                                Attendance
                            </NavLink>
                        </li>

                        <li>
                            <a
                                href="#"
                                onClick={onLogout}
                                className="hover:bg-secondary hover:text-white"
                            >
                                <IconExit />
                                Logout
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DefaultLayout;
