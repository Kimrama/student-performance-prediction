import { useState } from "react";
import PropTypes from "prop-types";

const SchoolType = ({ updateSchoolType }) => {
    const [content, setContent] = useState(undefined);
    const handleSchoolType = (e) => {
        setContent(e.target.value);
        updateSchoolType(e.target.value);
    };
    return (
        <div className="mb-14">
            <h1 className="text-7xl font-extrabold text-theme-blue">
                SCHOOL TYPE
            </h1>
            <div className="flex">
                <button
                    className={`mt-8 w-80 h-16 border-[1px] border-black text-center rounded-full mr-12 ${
                        content == 0 ? "bg-theme-green" : "bg-white"
                    }`}
                    onClick={handleSchoolType}
                    value={0}
                >
                    Public
                </button>
                <button
                    className={`mt-8 w-80 h-16 border-[1px] border-black text-center rounded-full mr-12 ${
                        content == 1 ? "bg-theme-green" : "bg-white"
                    }`}
                    onClick={handleSchoolType}
                    value={1}
                >
                    Private
                </button>
            </div>
        </div>
    );
};

SchoolType.propTypes = {
    updateSchoolType: PropTypes.func.isRequired,
};
export default SchoolType;
