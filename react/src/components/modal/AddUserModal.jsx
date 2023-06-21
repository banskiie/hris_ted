import React from "react";

const AttendanceModal = () => {
    return (
        <>
            <button
                className="btn font-roboto-condensed bg-green-700 text-slate-50 border-none hover:bg-green-900"
                onClick={() => {
                    window.my_modal_3.showModal();
                    camToggle();
                }}
            >
                Add User
            </button>
            <dialog id="my_modal_3" className="modal">
                <form method="dialog" className="modal-box bg-white">
                    <button
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={() => camToggle()}
                    >
                        ✕
                    </button>
                    <h3 className="font-bold text-lg">Add User</h3>
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
