import { useState } from "react";
import PropTypes from "prop-types";
const Attendance = ({ updateAttendance }) => {
    const [attendance, setAttendance] = useState(undefined);

    const handleAttendance = (e) => {
        setAttendance(e.target.value);
        updateAttendance(e.target.value);
        localStorage.setItem("attendance", e.target.value);
    };
    return (
        <div className="mb-14">
            <h1 className="text-6xl font-extrabold text-theme-blue">
                ATTENDANCE PERCENTAGE
            </h1>
            <div className="text-2xl flex">
                Determine what percentage of this class you attended.--
                <p className="bg-yellow-200">0 - 100</p>
            </div>
            <input
                type="text"
                placeholder="set"
                className="mt-8 w-80 h-16 border-[1px] border-black text-center rounded-full"
                onChange={handleAttendance}
                value={localStorage.getItem("attendance")}
            />
        </div>
    );
};
Attendance.propTypes = {
    updateAttendance: PropTypes.func.isRequired,
};

export default Attendance;
