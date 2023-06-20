import React from "react";
import AttendanceModal from "../components/AttendanceModal";

const Attendance = () => {
    return (
        <div>
            <div className="w-full flex flex-row justify-between px-8 py-4">
                <select
                    className="select select-bordered  text-slate-600 font-roboto-condensed"
                    defaultValue="time_in"
                >
                    <option value="time_in">Time In</option>
                    <option value="time_out">Time Out</option>
                </select>
                <AttendanceModal />
            </div>
            <div className="overflow-x-auto text-slate-600 px-8 py-2">
                <table className="table">
                    <thead>
                        <tr className="text-slate-900 font-bold">
                            <th>Employee ID</th>
                            <th>Name</th>
                            <th>Time In</th>
                            <th>Time Out</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>c0605</td>
                            <td>Razor Abaquita</td>
                            <td>2022-03-08 22:19:53</td>
                            <td>2022-03-08 22:31:56</td>
                        </tr>
                        <tr>
                            <td>c1334</td>
                            <td>Kyle Dacalos</td>
                            <td>2022-03-14 07:02:45</td>
                            <td>2022-03-14 17:31:39</td>
                        </tr>
                        <tr>
                            <td>c0004</td>
                            <td>Shand Ivan Sinohon</td>
                            <td>2022-03-14 07:54:36</td>
                            <td>2022-03-14 19:22:06</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Attendance;
