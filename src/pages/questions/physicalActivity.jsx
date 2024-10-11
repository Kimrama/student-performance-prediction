import { useState } from "react";
import PropTypes from "prop-types";

const PhysicalActivity = ({ updatePhysicalActivity }) => {
    const [content, setContent] = useState(undefined);

    const handlePhysicalActivity = (e) => {
        setContent(e.target.value);
        updatePhysicalActivity(e.target.value);
    };
    return (
        <div className="mb-14">
            <h1 className="text-7xl font-extrabold text-theme-blue">
                PHYSICAL ACTIVITY
            </h1>
            <p className="text-2xl">format ex. 0 - 10</p>
            <input
                type="text"
                placeholder="set"
                className="mt-8 w-80 h-16 border-[1px] border-black text-center rounded-full"
                onChange={handlePhysicalActivity}
            />
        </div>
    );
};
PhysicalActivity.propTypes = {
    updatePhysicalActivity: PropTypes.func.isRequired,
};

export default PhysicalActivity;
