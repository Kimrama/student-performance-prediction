import { useState } from "react";
import PropTypes from "prop-types";

const LearningDisabilities = ({ updateLearningDisabilities }) => {
    const [content, setContent] = useState(undefined);
    const handleSchoolType = (e) => {
        setContent(e.target.value);
        updateLearningDisabilities(e.target.value);
    };
    return (
        <div className="mb-14">
            <h1 className="text-7xl font-extrabold text-theme-blue">
                LEANING DISABILITES
            </h1>
            <div className="flex">
                <button
                    className={`mt-8 w-80 h-16 border-[1px] border-black text-center rounded-full mr-12 ${
                        content == 1 ? "bg-theme-green" : "bg-white"
                    }`}
                    onClick={handleSchoolType}
                    value={1}
                >
                    Yes
                </button>
                <button
                    className={`mt-8 w-80 h-16 border-[1px] border-black text-center rounded-full mr-12 ${
                        content == 0 ? "bg-theme-green" : "bg-white"
                    }`}
                    onClick={handleSchoolType}
                    value={0}
                >
                    No
                </button>
            </div>
        </div>
    );
};

LearningDisabilities.propTypes = {
    updateLearningDisabilities: PropTypes.func.isRequired,
};
export default LearningDisabilities;
