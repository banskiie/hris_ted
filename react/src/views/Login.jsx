import React from "react";
import c1blogo from "../assets/img/c1b.png";
import { useStateContext } from "../contexts/ContextProvider";

const Login = () => {
    const { setToken } = useStateContext();
    const onSubmit = (ev) => {
        ev.preventDefault();
        setToken(1);
    };
    return (
        <form
            onSubmit={onSubmit}
            className="form-control w-[28rem] h-[32rem] bg-slate-50 rounded-2xl shadow-xl flex flex-col justify-center items-center font-roboto-condensed"
        >
            <div className="w-full max-w-xs ">
                <div className="">
                    <img src={c1blogo} alt="" className="mb-4" />
                </div>
                <div className="w-full flex flex-col items-center">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-xl text-secondary">
                                User ID
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="ID Number"
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

                    <button
                        type="submit"
                        className="btn bg-secondary border-none text-slate-50 hover:bg-green-900 mx-auto mt-6 w-full"
                    >
                        LOGIN
                    </button>
                </div>
            </div>
        </form>
    );
};

export default Login;
