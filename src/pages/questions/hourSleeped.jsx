import { useState } from "react";
import PropTypes from "prop-types";
const HourSleeped = ({ updateHourSleeped }) => {
    const [hourSleeped, setHourSleeped] = useState(undefined);

    const handleHourSleeped = (e) => {
        setHourSleeped(e.target.value);
        updateHourSleeped(e.target.value);
    };
    return (
        <div className="mb-14">
            <h1 className="text-7xl font-extrabold text-theme-blue">
                HOUR SLEEDPED
            </h1>
            <p className="text-2xl">format ex.6, 7, 8</p>
            <input
                type="text"
                placeholder="set"
                className="mt-8 w-80 h-16 border-[1px] border-black text-center rounded-full"
                onChange={handleHourSleeped}
            />
        </div>
    );
};
HourSleeped.propTypes = {
    updateHourSleeped: PropTypes.func.isRequired,
};

export default HourSleeped;
