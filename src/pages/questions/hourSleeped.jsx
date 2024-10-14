import { useState } from "react";
import PropTypes from "prop-types";
const HourSleeped = ({ updateHourSleeped }) => {
    const [hourSleeped, setHourSleeped] = useState(undefined);

    const handleHourSleeped = (e) => {
        setHourSleeped(e.target.value);
        updateHourSleeped(e.target.value);
        localStorage.setItem("hourSleeped", e.target.value);
    };
    return (
        <div className="mb-14">
            <h1 className="text-6xl font-extrabold text-theme-blue">
                HOUR SLEEPED PER DAY
            </h1>
            <div className="text-2xl flex">
                Determine how many hours you sleep per day.--
                <p className="bg-yellow-200">2, 4, 6...</p>
            </div>
            <input
                type="text"
                placeholder="set"
                className="mt-8 w-80 h-16 border-[1px] border-black text-center rounded-full"
                onChange={handleHourSleeped}
                value={localStorage.getItem("hourSleeped")}
            />
        </div>
    );
};
HourSleeped.propTypes = {
    updateHourSleeped: PropTypes.func.isRequired,
};

export default HourSleeped;
