import React from "react";
import c1blogo from "../assets/img/c1b.png";
import { NavLink } from "react-router-dom";

const Register = () => {
    return (
        <div className="form-control w-[28rem] h-[32rem] bg-slate-50 rounded-2xl shadow-xl flex flex-col justify-center items-center font-roboto-condensed">
            <div className="w-full max-w-xs ">
                <div className="">
                    <img src={c1blogo} alt="" className="mb-4" />
                </div>
                <div className="w-full flex flex-col items-center">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-xl text-secondary">
                                Full Name
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="input border-secondary text-slate-800"
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-xl text-secondary">
                                Password
                            </span>
                        </label>
                        <input
                            type="password"
                            placeholder="•••••••••••••"
                            className="input border-secondary text-slate-800"
                        />
                    </div>
                    <div className="w-full mt-2">
                        <NavLink
                            to="/login"
                            className=" text-slate-400 hover:text-green-900"
                        >
                            Already have an account?
                        </NavLink>
                    </div>
                    <button className="btn bg-secondary border-none text-slate-50 hover:bg-green-800 mx-auto mt-6 w-full">
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;
