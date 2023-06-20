import React, { useEffect, useState } from "react";
import IconTime from "../assets/icons/IconTime";
import Webcam from "react-webcam";

const AttendanceModal = () => {
    const [time, setTime] = useState(new Date());
    const [showCam, setShowCam] = useState(false);

    const camToggle = () => {
        setShowCam((prevState) => !prevState);
    };

    useEffect(() => {
        setInterval(() => setTime(new Date()), 1000);
    }, []);

    return (
        <>
            <button
                className="btn font-roboto-condensed bg-green-700 text-slate-50 border-none hover:bg-green-900"
                onClick={() => {
                    window.my_modal_3.showModal();
                    camToggle();
                }}
            >
                <IconTime />
                Time
            </button>
            <dialog id="my_modal_3" className="modal">
                <form method="dialog" className="modal-box bg-white">
                    <button
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={() => camToggle()}
                    >
                        ✕
                    </button>
                    <h3 className="font-bold text-lg">Attendance</h3>
                    {showCam ? <Webcam /> : null}
                    <p className="w-full text-center py-4 text-2xl font-roboto-condensed">
                        {time.toLocaleString("en-US", {
                            weekday: "short",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric",
                            hour12: true,
                        })}
                    </p>
                    <div className="w-full flex flex-row justify-evenly font-roboto-condensed">
                        <button className="btn bg-blue-600 hover:bg-blue-800 text-slate-50 border-none w-24">
                            Time-in
                        </button>
                        <button className="btn bg-red-700 hover:bg-red-900 text-slate-50 border-none w-24">
                            Time-out
                        </button>
                    </div>
                </form>
            </dialog>
        </>
    );
};

export default AttendanceModal;
