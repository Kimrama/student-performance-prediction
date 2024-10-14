import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const ParentalEducationLevel = ({ updateParentalEducationLevel }) => {
    const [content, setContent] = useState(undefined);
    const handleContent = (e) => {
        setContent(e.target.value);
        updateParentalEducationLevel(e.target.value);
        localStorage.setItem("parentalEducationLevel", e.target.value);
    };
    useEffect(() => {
        setContent(localStorage.getItem("parentalEducationLevel"));
    }, []);
    return (
        <div className="mb-14">
            <h1 className="text-6xl font-extrabold text-theme-blue">
                PARENTAL EDUCATION LEVEL
            </h1>
            <div className="text-2xl flex">Your family's education level.</div>
            <div className="flex">
                <button
                    className={`mt-8 w-80 h-16 border-[1px] border-black text-center rounded-full mr-12 ${
                        content == 0 ? "bg-theme-green" : "bg-white"
                    }`}
                    onClick={handleContent}
                    value={0}
                >
                    High School
                </button>
                <button
                    className={`mt-8 w-80 h-16 border-[1px] border-black text-center rounded-full mr-12 ${
                        content == 1 ? "bg-theme-green" : "bg-white"
                    }`}
                    onClick={handleContent}
                    value={1}
                >
                    College
                </button>
                <button
                    className={`mt-8 w-80 h-16 border-[1px] border-black text-center rounded-full mr-12 ${
                        content == 2 ? "bg-theme-green" : "bg-white"
                    }`}
                    onClick={handleContent}
                    value={2}
                >
                    Postgraduate
                </button>
            </div>
        </div>
    );
};

ParentalEducationLevel.propTypes = {
    updateParentalEducationLevel: PropTypes.func.isRequired,
};
export default ParentalEducationLevel;
