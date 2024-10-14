import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const MotivationLevel = ({ updateMotivationLevel }) => {
    const [motivationLevel, setMotivationLevel] = useState(undefined);
    const handleMotivationLevel = (e) => {
        setMotivationLevel(e.target.value);
        updateMotivationLevel(e.target.value);
        localStorage.setItem("motivationLevel", e.target.value);
    };

    useEffect(() => {
        setMotivationLevel(localStorage.getItem("motivationLevel"));
    }, []);
    return (
        <div className="mb-14">
            <h1 className="text-6xl font-extrabold text-theme-blue">
                MOTIVATION LEVEL
            </h1>
            <div className="text-2xl flex">How much do you like to study?</div>
            <div className="flex">
                <button
                    className={`mt-8 w-80 h-16 border-[1px] border-black text-center rounded-full mr-12 ${
                        motivationLevel == 0 ? "bg-theme-green" : "bg-white"
                    }`}
                    onClick={handleMotivationLevel}
                    value={0}
                >
                    Low
                </button>
                <button
                    className={`mt-8 w-80 h-16 border-[1px] border-black text-center rounded-full mr-12 ${
                        motivationLevel == 1 ? "bg-theme-green" : "bg-white"
                    }`}
                    onClick={handleMotivationLevel}
                    value={1}
                >
                    Medium
                </button>
                <button
                    className={`mt-8 w-80 h-16 border-[1px] border-black text-center rounded-full mr-12 ${
                        motivationLevel == 2 ? "bg-theme-green" : "bg-white"
                    }`}
                    onClick={handleMotivationLevel}
                    value={2}
                >
                    High
                </button>
            </div>
        </div>
    );
};

MotivationLevel.propTypes = {
    updateMotivationLevel: PropTypes.func.isRequired,
};
export default MotivationLevel;
