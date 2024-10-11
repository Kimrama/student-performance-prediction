import { useState } from "react";
import PropTypes from "prop-types";

const TutoringSessions = ({ updateTutoringSessions }) => {
    const [content, setContent] = useState(undefined);

    const handleTutoringSessions = (e) => {
        setContent(e.target.value);
        updateTutoringSessions(e.target.value);
    };
    return (
        <div className="mb-14">
            <h1 className="text-7xl font-extrabold text-theme-blue">
                TUTORING SESSIONS
            </h1>
            <p className="text-2xl">format ex. 0 - 10</p>
            <input
                type="text"
                placeholder="set"
                className="mt-8 w-80 h-16 border-[1px] border-black text-center rounded-full"
                onChange={handleTutoringSessions}
            />
        </div>
    );
};
TutoringSessions.propTypes = {
    updateTutoringSessions: PropTypes.func.isRequired,
};

export default TutoringSessions;
