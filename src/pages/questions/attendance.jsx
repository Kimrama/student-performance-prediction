import { useState } from "react";
import PropTypes from "prop-types";
const Attendance = ({ updateAttendance }) => {
    const [attendance, setAttendance] = useState(undefined);

    const handleAttendance = (e) => {
        setAttendance(e.target.value);
        updateAttendance(e.target.value);
    };
    return (
        <div className="mb-14">
            <h1 className="text-7xl font-extrabold text-theme-blue">
                ATTENDANCE PERCENTAGE
            </h1>
            <p className="text-2xl">format ex.10, 20, 99</p>
            <input
                type="text"
                placeholder="set"
                className="mt-8 w-80 h-16 border-[1px] border-black text-center rounded-full"
                onChange={handleAttendance}
            />
        </div>
    );
};
Attendance.propTypes = {
    updateAttendance: PropTypes.func.isRequired,
};

export default Attendance;
