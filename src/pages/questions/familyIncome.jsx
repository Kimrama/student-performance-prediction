import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const FamilyIncome = ({ updateFamilyIncome }) => {
    const [content, setContent] = useState(undefined);
    const handleContent = (e) => {
        setContent(e.target.value);
        updateFamilyIncome(e.target.value);
        localStorage.setItem("familyIncome", e.target.value);
    };

    useEffect(() => {
        setContent(localStorage.getItem("familyIncome"));
    }, []);

    return (
        <div className="mb-14">
            <h1 className="text-6xl font-extrabold text-theme-blue">
                FAMILY INCOME
            </h1>
            <div className="text-2xl flex">Your family income?</div>
            <div className="flex">
                <button
                    className={`mt-8 w-80 h-16 border-[1px] border-black text-center rounded-full mr-12 ${
                        content == 0 ? "bg-theme-green" : "bg-white"
                    }`}
                    onClick={handleContent}
                    value={0}
                >
                    Low
                </button>
                <button
                    className={`mt-8 w-80 h-16 border-[1px] border-black text-center rounded-full mr-12 ${
                        content == 1 ? "bg-theme-green" : "bg-white"
                    }`}
                    onClick={handleContent}
                    value={1}
                >
                    Medium
                </button>
                <button
                    className={`mt-8 w-80 h-16 border-[1px] border-black text-center rounded-full mr-12 ${
                        content == 2 ? "bg-theme-green" : "bg-white"
                    }`}
                    onClick={handleContent}
                    value={2}
                >
                    High
                </button>
            </div>
        </div>
    );
};

FamilyIncome.propTypes = {
    updateFamilyIncome: PropTypes.func.isRequired,
};
export default FamilyIncome;
