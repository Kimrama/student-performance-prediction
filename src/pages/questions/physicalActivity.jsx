import { useState } from "react";
import PropTypes from "prop-types";

const PhysicalActivity = ({ updatePhysicalActivity }) => {
    const [content, setContent] = useState(undefined);

    const handlePhysicalActivity = (e) => {
        setContent(e.target.value);
        updatePhysicalActivity(e.target.value);
        localStorage.setItem("physicalActivity", e.target.value);
    };
    return (
        <div className="mb-14">
            <h1 className="text-6xl font-extrabold text-theme-blue">
                PHYSICAL ACTIVITY
            </h1>
            <div className="text-2xl flex">
                How many physical activity have you attended?--
                <p className="bg-yellow-200">0, 1, 2, 3...</p>
            </div>
            <input
                type="text"
                placeholder="set"
                className="mt-8 w-80 h-16 border-[1px] border-black text-center rounded-full"
                onChange={handlePhysicalActivity}
                value={localStorage.getItem("physicalActivity")}
            />
        </div>
    );
};
PhysicalActivity.propTypes = {
    updatePhysicalActivity: PropTypes.func.isRequired,
};

export default PhysicalActivity;
