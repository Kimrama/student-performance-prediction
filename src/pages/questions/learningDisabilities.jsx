import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const LearningDisabilities = ({ updateLearningDisabilities }) => {
    const [content, setContent] = useState(undefined);
    const handleSchoolType = (e) => {
        setContent(e.target.value);
        updateLearningDisabilities(e.target.value);
        localStorage.setItem("learningDisabilities", e.target.value);
    };
    useEffect(() => {
        setContent(localStorage.getItem("learningDisabilities"));
    }, []);
    return (
        <div className="mb-14">
            <h1 className="text-6xl font-extrabold text-theme-blue">
                LEARNING DISABILITIES
            </h1>
            <div className="text-2xl flex">
                Do you have any disorders that affect your learning?
            </div>
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
