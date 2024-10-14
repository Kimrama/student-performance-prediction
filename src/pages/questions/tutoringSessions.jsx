import { useState } from "react";
import PropTypes from "prop-types";

const TutoringSessions = ({ updateTutoringSessions }) => {
    const [content, setContent] = useState(undefined);

    const handleTutoringSessions = (e) => {
        setContent(e.target.value);
        updateTutoringSessions(e.target.value);
        localStorage.setItem("tutoringSessions", e.target.value);
    };
    return (
        <div className="mb-14">
            <h1 className="text-6xl font-extrabold text-theme-blue">
                TUTORING SESSIONS
            </h1>
            <div className="text-2xl flex">
                How many tutoring sessions have you attended?--
                <p className="bg-yellow-200">0, 1, 2, 3...</p>
            </div>
            <input
                type="text"
                placeholder="set"
                className="mt-8 w-80 h-16 border-[1px] border-black text-center rounded-full"
                onChange={handleTutoringSessions}
                value={localStorage.getItem("tutoringSessions")}
            />
        </div>
    );
};
TutoringSessions.propTypes = {
    updateTutoringSessions: PropTypes.func.isRequired,
};

export default TutoringSessions;
