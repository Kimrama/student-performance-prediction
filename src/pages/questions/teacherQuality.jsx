import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const TeacherQuality = ({ updateTeacherQuality }) => {
    const [content, setContent] = useState(undefined);
    const handleContent = (e) => {
        setContent(e.target.value);
        updateTeacherQuality(e.target.value);
        localStorage.setItem("teacherQuality", e.target.value);
    };
    useEffect(() => {
        setContent(localStorage.getItem("teacherQuality"));
    }, []);
    return (
        <div className="mb-14">
            <h1 className="text-6xl font-extrabold text-theme-blue">
                TEACHER QUALITY
            </h1>
            <div className="text-2xl flex">
                How much do you understand what the teacher is teaching?
            </div>
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

TeacherQuality.propTypes = {
    updateTeacherQuality: PropTypes.func.isRequired,
};
export default TeacherQuality;
