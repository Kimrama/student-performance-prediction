import { useState } from "react";
import PropTypes from "prop-types";
const HourStudied = ({ updateHourStudied }) => {
    const [hourStudied, setHourStudied] = useState(undefined);

    const handleHourStudied = (e) => {
        setHourStudied(e.target.value);
        updateHourStudied(e.target.value);
        localStorage.setItem("hourStudied", e.target.value);
    };

    return (
        <div className="mb-14">
            <h1 className="text-6xl font-extrabold text-theme-blue">
                HOUR STUDIED
            </h1>
            <div className="text-2xl flex">
                <p>
                    Determine how many hours you spent on this topic this
                    semester.--
                </p>
                <p className="bg-yellow-200">10, 20, 30...</p>
            </div>
            <input
                type="text"
                placeholder="set"
                className="mt-8 w-80 h-16 border-[1px] border-black text-center rounded-full"
                onChange={handleHourStudied}
                value={localStorage.getItem("hourStudied")}
            />
        </div>
    );
};
HourStudied.propTypes = {
    updateHourStudied: PropTypes.func.isRequired,
};

export default HourStudied;
