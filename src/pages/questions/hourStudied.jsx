import { useState } from "react";
import PropTypes from "prop-types";
const HourStudied = ({ updateHourStudied }) => {
    const [hourStudied, setHourStudied] = useState(undefined);

    const handleHourStudied = (e) => {
        setHourStudied(e.target.value);
        updateHourStudied(e.target.value);
    };
    return (
        <div className="mb-14">
            <h1 className="text-7xl font-extrabold text-theme-blue">
                HOUR STUDIED
            </h1>
            <p className="text-2xl">format ex.15.12</p>
            <input
                type="text"
                placeholder="set"
                className="mt-8 w-80 h-16 border-[1px] border-black text-center rounded-full"
                onChange={handleHourStudied}
            />
        </div>
    );
};
HourStudied.propTypes = {
    updateHourStudied: PropTypes.func.isRequired,
};

export default HourStudied;
